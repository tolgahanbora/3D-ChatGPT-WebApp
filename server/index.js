import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalle.routes.js'



dotenv.config()

const PORT = 8080

const app = express()
app.use(cors())
app.use(express.json({limig: "50mb"}))
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E" })
  })

app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`)
})