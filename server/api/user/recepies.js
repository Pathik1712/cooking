import mongoose from "mongoose"

let recepiesschema = new mongoose.Schema({
  name: { type: String, require: true },
  ingridients: [{ type: String, require: true }],
  method: { type: String, require: true },
  url: { type: String, require: true },
  owner: { type: mongoose.SchemaTypes.ObjectId, require: true },
  social_media: {
    insta: [{ type: String }],
    youtube: [{ type: String }],
    twitter: [{ type: String }],
    facebook: [{ type: String }],
  },
})

export const recepiesmodel = mongoose.model("recepies", recepiesschema)
