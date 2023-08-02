import diaryData from '../data/diaries.json'

import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from '../types'
// import { diaryEntries } from './diaries.type';

// Data assertion, we indicate to the json that it is of a type of variable that we have already defined
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

const getEntries = (): DiaryEntry[] => {
  return diaries
}

const findById = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(e => e.id === id)

  if (entry !== undefined) {
    const { comment, ...restOfEntry } = entry

    return restOfEntry
  }

  return undefined // entry
}

// because typescript is static, we must filter the array information when returning it
const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(e => e.id + 1)),
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
// Property 'comment' does not exist on type 'NoSensitiveInfoDiaryEntry'
// diariesWithoutSensitiveInfo[0].comment

export {
  addDiary,
  findById,
  getEntries,
  getEntriesWithoutSensitiveInfo
}
