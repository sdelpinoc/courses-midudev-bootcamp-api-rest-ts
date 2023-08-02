import express from 'express'

import { addDiary, findById, getEntriesWithoutSensitiveInfo } from '../controllers/diaries'

import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  // The + operator if change the attribute id, from string to number
  const diary = findById(+req.params.id)
  // console.log(typeof diary)

  return (diary !== undefined)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    // res.send('Saving a diary')
    // const { date, weather, visibility, comment } = req.body

    const newDiaryEntry = toNewDiaryEntry(req.body)

    const diaryEntry = addDiary(newDiaryEntry)

    res.json(diaryEntry)
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(400).send(e.message)
    } else {
      console.log(e)
      res.status(400).send('Unknown error')
    }
  }
})

export default router
