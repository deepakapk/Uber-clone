import express from "express"
import { config } from "dotenv"
import cors from "cors"

config()
const app = express()

// middlewares
app.use(cors())




app.get("/",(req, res)=>{
    res.send("Hello, World!")
})

export default app;