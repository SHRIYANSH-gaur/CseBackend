import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const EventMessage = mongoose.model("EventMessage", eventSchema);

export default EventMessage;
