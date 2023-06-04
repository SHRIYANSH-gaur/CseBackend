import EventMessage from "../models/eventMessage.js";
import mongoose from "mongoose";

export const egetPosts = async (req, res) => {
  try {
    const postMessages = await EventMessage.find();
    // console.log(postMessages);

    return res.json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const ecreatePost = async (req, res) => {
  const post = req.body;
  // console.log(req.body);
  const newPost = new EventMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const eupdatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  const updatedPost = await EventMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  return res.json(updatedPost);
};

export const edeletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  await EventMessage.findByIdAndRemove(_id);

  return res.json({ message: "Post deleted successfully" });
};
