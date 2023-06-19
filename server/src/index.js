import express from "express"
import mongoose from "mongoose"
import { userrouter } from "./route/user.js"
import { recepiesrouter } from "./route/recipies.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app = express()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", userrouter)
app.use("/recepies", recepiesrouter)
const connectString = process.env.DATABASE_URL
mongoose.connect(connectString)
app.listen(port, () => {
  console.log("server started")
})
