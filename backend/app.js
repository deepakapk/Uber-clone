import express from "express"
import { config } from "dotenv"
import cors from "cors"
import { connectToDB } from "./database/db.js"
import userRoutes from "./routes/user.routes.js"
import captainRoutes from "./routes/captain.routes.js"
import cookieParser from "cookie-parser"

config()
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())



// routes
app.use("/users", userRoutes)
app.use("/captains",captainRoutes)




connectToDB()
app.get("/",(req, res)=>{
    res.send("Hello, World!")
})

export default app;