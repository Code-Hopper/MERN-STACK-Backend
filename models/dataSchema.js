import mongoose, { model } from "mongoose";

let dataSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    city: String,
    pincode:Number,
    age: Number,
    address: String,
    dob: String,
    timeStamp: String
})

// pre and post

dataSchema.pre("save",function (){
    this.timeStamp = `${new Date().toLocaleDateString()} | ${new Date().toLocaleTimeString()}`
})

let DataModel = new model("datas", dataSchema)

export { DataModel }