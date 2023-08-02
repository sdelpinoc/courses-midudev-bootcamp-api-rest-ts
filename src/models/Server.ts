import express from 'express'
import diaryRoutes from '../routes/diaries'

export default class Server {
  app: express.Application
  port: number

  constructor () {
    this.app = express()
    this.port = 3000

    this.middleware()

    this.routes()
  }

  middleware (): void {
    this.app.use(express.json()) // Middleware thats transform the req.body in json
  }

  routes (): void {
    this.app.get('/ping', (_, res) => { // _ is for ignore parameters, in this case is the request
      console.log('Someone ping here!')
      res.send('Pong! ' + new Date().toLocaleDateString())
    })

    this.app.use('/api/diaries', diaryRoutes)
  }

  listen (): void {
    this.app.listen(this.port, () => {
      console.log(`Server running in port ${this.port}`)
    })
  }
}
