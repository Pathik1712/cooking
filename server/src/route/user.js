import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { userdata } from "../user/user.js"
import { recepiesmodel } from "../user/recepies.js"
const router = express.Router()
router.post("/register", async (req, res) => {
  const { username, password } = req.body
  const user = await userdata.findOne({ username })
  if (user) {
    return res.json(null)
  }
  const hashpassword = await bcrypt.hash(password, 10)
  const user1 = await userdata.create({
    username,
    password: hashpassword,
    social_media: {
      insta: ["flase", null],
      youtube: ["false", null],
      twitter: ["false", null],
      facebook: ["false", null],
    },
  })
  await user1.save()
  const users = await userdata.findOne({ username })
  const token = jwt.sign({ id: users._id }, "secrate")
  res.json({ token, uid: users._id, media: users.social_media })
})
router.post("/login", async (req, res) => {
  const { username, password } = req.body
  const user = await userdata.findOne({ username })
  if (!user) {
    return res.json(null)
  }
  const samepass = await bcrypt.compare(password, user.password)
  if (!samepass) {
    return res.json(null)
  }
  const token = jwt.sign({ id: user._id }, "secrate")
  res.json({ token, uid: user._id, media: user.social_media })
})
router.put("/", async (req, res) => {
  const { uid, social_media } = req.body
  res.json(social_media)
  let temp = {
    insta: social_media[0],
    youtube: social_media[1],
    twitter: social_media[2],
    facebook: social_media[3],
  }
  await userdata.findByIdAndUpdate(uid, { social_media: temp })
  await recepiesmodel.updateMany({ owner: uid }, { social_media: temp })
  res.end()
})
const verify = (req, res, next) => {
  const token = req.headers.auth
  if (token) {
    jwt.verify(token, "secrate", (err) => {
      if (err) return res.sendStatus(403)
      next()
    })
  } else {
    res.sendStatus(401)
  }
}
export { router as userrouter, verify }
