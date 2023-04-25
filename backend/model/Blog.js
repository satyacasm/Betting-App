import mongoose from "mongoose";

const Schema =mongoose.Schema;

const blogSchema= new Schema({
    title:{
        type:String,
        required :true

    },
    description:{
        type:String,
        required :true
    },
    location:{
        type:String,
        default:"none",
        required:true
    },
    image:{
        type:String,
        required :true
    },

    date:{
        type: Date,
    // default: Date.now,
    required:true
    },
    tag:{
        type  : String,
        default :"none",
        required :true
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required :true
    }
});

export default mongoose.model("Blog",blogSchema);