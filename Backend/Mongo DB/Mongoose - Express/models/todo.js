import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({        // schema to impose restrictions
  title: String,
  desc: String,
  isDone: Boolean,
  days: Number
});

export const Todo = mongoose.model("Todo", todoSchema);

