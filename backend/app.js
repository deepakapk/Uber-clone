import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { connectToDB } from "./database/db.js"

config()
const app = express()

// middlewares
app.use(cors())




connectToDB()
app.get("/",(req, res)=>{
    res.send("Hello, World!")
})

export default app;