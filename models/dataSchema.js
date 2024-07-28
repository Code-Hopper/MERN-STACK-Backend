import mongoose, { model } from "mongoose";

let dataSchema = mongoose.Schema({
    name: String,
    phone: String,
    city: String,
    pincode:Number,
    age: Number,
    address: String,
    dob: String
})

// pre , post

dataSchema.pre("save",function(){
    // timestamp
    console.log("called before saving the data !")
})

let DataModel = new model("data", dataSchema)

export { DataModel }