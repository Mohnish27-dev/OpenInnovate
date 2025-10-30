import express from 'express'
import cors from "cors"
import session from "cookie-session"
import dotenv from 'dotenv'
import { connectDB } from './libs/connectDB.js';
dotenv.config()
const { errorHandler } = await import('./middlewares/errorHandler.js');


const app = express()

app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true
}))

app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.get('/', async(req, res, next) => {
    try {
        throw new Error('Test error handling')
        res.status(200).json({ message: 'API is running' })

    } catch (error) {
        next(error)
    }
})
app.use(errorHandler)


app.listen(8000, async () => {
    console.log('Server is running on port 8000')
    await connectDB();
})



