import express from "express"
import mongoose from "mongoose"
import { userrouter } from "./route/user.js"
import { recepiesrouter } from "./route/recipies.js"
import cors from "cors"

dotenv.config()
const app = express()
const port = 3001
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", userrouter)
app.use("/recepies", recepiesrouter)
const connectString =
  "mongodb+srv://pathik2003:t8ydab4BSZQyuAUf@cluster0.dn2rrqx.mongodb.net/"
mongoose.connect(connectString)
app.listen(port, () => {
  console.log("server started")
})
