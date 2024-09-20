import {model, Schema } from "mongoose"


// Defining Schema for Ticket 
const ticketSchema = new Schema({
  title:{
    type:String,
    required:[true,"Title is required"],
    trim:true,
    maxlength:[100,"Title can't exceed 100 characters"]
  },
  description:{
    type:String,
    required:[true,"Description is required"]
  },
  status:{
    type:String,
    enum:["confirm","pending","cancelled"],
    default:"confirm"
  }
},
{
  timestamps:true
})

export const Ticket = new model("Ticket",ticketSchema)