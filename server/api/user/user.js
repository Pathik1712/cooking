import mongoose from "mongoose"
let userscema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  social_media: {
    insta: [{ type: String }],
    youtube: [{ type: String }],
    twitter: [{ type: String }],
    facebook: [{ type: String }],
  },
})
export const userdata = mongoose.model("userdatas", userscema)
