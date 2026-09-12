import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title:String,
    description:String,
})

export const notesModel = mongoose.model('notes', notesSchema)