import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  quickLinks: [{ id: Number, title: String, url: String }],
  notices: [{ id: Number, title: String, url: String }],
  events: [{ date: String, title: String, time: String }],
  tenders: [{ id: Number, title: String, url: String }],
});

export default mongoose.model("Data", dataSchema);


