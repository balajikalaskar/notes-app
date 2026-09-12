import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { notesModel } from "./models/note.model.js";
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public"))
// app.use(path)

// create
app.post("/api/create-note", async (req, res) => {
  const { title, description } = req.body;
  const note = await notesModel.create({
    title: title,
    description: description,
  });
  res.status(201).json({
    message: "Note created succesfully!",
    note,
  });
});

// read
app.get("/api/get-notes", async (req, res) => {
  const notes = await notesModel.find();
  res.status(200).json({
    message: "here are the notes:",
    notes,
  });
});

// delete
app.delete("/api/delete-note/:id", async (req, res) => {
  const { id } = req.params;
  await notesModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "note delted successully",
  });
});

// update
app.patch("/api/update-note", async (req, res) => {
  const { title, description } = req.body;
  const { id } = req.params;
  await notesModel.findByIdAndUpdate(id, {
    title,
    description,
  });

  res.status(200).json({
    messages: "note updated successfully!",
  });
});


app.use('*name', (req,res)=>{
  res.sendFile(path.join(__dirname, "..", "/public/index.html"))
})

console.log(__dirname)
