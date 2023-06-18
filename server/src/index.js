import express from "express"
import mongoose from "mongoose"
import { userrouter } from "./route/user.js"
import { recepiesrouter } from "./route/recipies.js"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", userrouter)
app.use("/recepies", recepiesrouter)
mongoose.connect(
  "mongodb+srv://pathik2003:4zmNOyXsoKXYn4KZ@cluster0.dn2rrqx.mongodb.net/"
)
app.listen(3001, () => {
  console.log("server started")
})
