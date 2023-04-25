import mongoose from "mongoose";
import Blog from "../model/Blog";
import User from "../model/User";

export const getAllBlogs =async (req,res,next)=>{
    let blogs;
    try {
        blogs=await Blog.find();
    } catch (error) {
        return console.log(error);
    }
    if(!blogs){
        return res.status(404).json({message :"No blogs found"});
    }
    return res.status(200).json({blogs});
}

export const addBlog =async (req,res,next)=>{
    const {title,description,image,user,date,tag,profile,location}=req.body;
    let existUser;
    try {
        existUser=await User.findById(user);
    } catch (error) {
        return console.log(error);
    }
    if(!existUser){
        return res.status(400).json({message:"unable to find the user by this id"})
    }
    const blog= new Blog({
        title,description,image,user,date: new Date(`${date}`),tag,profile,location
    });
    try{
       const session =await mongoose.startSession();
       session.startTransaction();
       await blog.save({session});
       existUser.blogs.push(blog);
       await existUser.save({session});
       await session.commitTransaction();
    }catch(err){
           return  console.log(err);
    }
    return res.status(200).json({blog});

};

export const updateBlog=async (req,res,next)=>{
    const {title,description,tag,location,image}=req.body;
    const blogId=req.params.id;
    let blog;
    try{
        blog= await Blog.findByIdAndUpdate(blogId,{title,description,tag,location,image});
    } 
    catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message:"unable to update"})
    }
    return res.status(200).json({blog});
};

//this method return the blog by it id

export const getById =async (req,res,next)=>{
    const id =req.params.id;
    let blog;
    try{
        blog=await Blog.findById(id);
    }catch(err){
       return console.log(err);
    }
    if(!blog){
        return res.status(404).json({message:"No blog found"});
    }
    return res.status(200).json({blog});
};

export const deleteBlog =async (req,res,next)=>{
    const id=req.params.id;
    let blog;
    try {
        blog= await Blog.findByIdAndRemove(id);
    } catch (err) {
        return console.log(err)
    }
    if(!blog){
        return res.status(500).json({message :"Unable to delete"});
    }
    return res.status(200).json({message:"Blog deleted"});
}