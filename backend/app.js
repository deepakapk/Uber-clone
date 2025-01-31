import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { connectToDB } from "./database/db.js"
import userRoutes from "./routes/user.routes.js"

config()
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// routes
app.use("/users", userRoutes)




connectToDB()
app.get("/",(req, res)=>{
    res.send("Hello, World!")
})

export default app;