import express from 'express'
import { env } from './config/environments'
import router from './routes/routers'
import './config/database'

const app = express()

app.use(express.json({ extended: true }))
app.use('/api', router)
app.listen(env.PORT)
