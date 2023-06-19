import express from "express"
import { recepiesmodel } from "../user/recepies.js"
import { verify } from "./user.js"

const router = express.Router()
router
  .route("/")
  .get(async (req, res) => {
    try {
      let recepies_list = await recepiesmodel.find({})
      res.json(recepies_list)
    } catch (err) {
      res.json(err)
    }
    res.end()
  })
  .delete(async (req, res) => {
    const { id } = req.body
    await recepiesmodel.findByIdAndDelete(id)
    res.end()
  })
router.post("/add", verify, async (req, res) => {
  const { name, ingridients, method, url, owner, social_media } = req.body
  const rec = await recepiesmodel.create({
    name,
    ingridients,
    method,
    url,
    owner,
    social_media,
  })
  rec.save()
  res.end()
})
router.post("/user", verify, async (req, res) => {
  const { uid } = req.body
  let data = await recepiesmodel.find({ owner: uid })
  res.json(data)
  res.end()
})

export { router as recepiesrouter }
