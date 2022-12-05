import express from "express"
import { db } from "./config/database.js"
import cookieParser from "cookie-parser"
import Portfolio from './routes/Portfolio.js'
import Gallery from './routes/Gallery.js'
import Experiences from './routes/Experiences.js'
import Experienced from './routes/Experienced.js'
import Tables from './routes/Tables.js'
import authRoutes from './routes/auth.js'
import Cv from './routes/cv.js'
import cors from 'cors'
import dotenv from 'dotenv'
import FileUpload from 'express-fileupload'
import { verifyToken } from './middleware/VerifiyToken.js'

dotenv.config()
const app = express()

try {
    await db.authenticate()
    console.log('Database Connected')
} catch (error) {
    console.error('Connection Error:', error)
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(cookieParser())
app.use(express.json())
app.use(FileUpload());
app.use(express.static("public"));
app.use('/', authRoutes)
// app.use(verifyToken)
app.use('/portfolio', Portfolio)
app.use('/gallery', Gallery)
app.use('/experiences', Experiences)
app.use('/experienced', Experienced)
app.use('/tables', Tables)
app.use('/cv', Cv)

app.listen(5000, () => console.log('Server running at http://localhost:5000/'))