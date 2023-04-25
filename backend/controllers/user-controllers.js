import User from "../model/User";
import bcrypt from "bcryptjs"

export const getAllUser= async(req,res,next)=>{
    let user ;
    try{
        user=await User.find();
    }catch(err){
        return console.log(err);
    }
    if(!user){
        return res.status(400).json({message: "No User found"});
    }
    return res.status(200).json({user});
};

export const  signup= async(req,res,next)=>{
    const {name,email,password}=req.body;

    let existUser;

    try {
       existUser =await User.findOne({email});
     
    } catch (error) {
       return console.log(error);
    }

    if(existUser){
        return res.status(400).json({message :"User allready exits"});
    }
    const hashPassword =bcrypt.hashSync(password);
    const user=new User({
        name,
        email,
        password :hashPassword,
        blogs:[],
    });
   
    try{
       await user.save();
    }catch(err){
        return console.log(err);
    }
    return res.status(201).json({user});

};

export const login= async (req,res,next)=>{
    const {email,password}=req.body;

    let existUser;

    try {
       existUser =await User.findOne({email});
     
    } catch (error) {
       return console.log(error);
    }

    if(!existUser){
        return res.status(400).json({message :"User not exits"});
    }

    const isPassword=bcrypt.compareSync(password,existUser.password);
    if(!isPassword){
        return res.status(400).json({message:"password is incorrect"});
    }

    // return res.status(200).json({message:"Login Succesfull"});
    return res
    .status(200)
    .json({ id: existUser._id, message: "Login Successfull" });



}

export const getUserById =async (req,res,next)=>{
    const id =req.params.id;
    let user;
    try {
        user=await User.findById(id);
    } catch (err) {
        console.log(err);
        
    }
    if(!user){
        return res.status(404),json({message: "No user found"});
    }
    return res.status(200).json({user})
}