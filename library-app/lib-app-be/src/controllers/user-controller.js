const InputValidationException = require("../exceptions/InputValidationException");
const User = require("../models/User");
const userService=require("../services/user-service");

const addNewUser=async(req,res)=>{
    try{
        const {firstName,lastName,email,password,type}=req.body;
        let user={
            firstName,
            lastName,
            email,
            password,
            type,
        };
        user=await userService.addNewUser(user);
        return res.status(200).send(user);
    }catch(err){
        console.error(err);
        return res.status(err instanceof InputValidationException ?400:500).send({message: err.message});
    }
};

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const data=await userService.loginUser({email,password});
        return res.status(200).send(data);
    }catch(err){
        console.error(err);
        return res.status(500).send({message:err.message});
    }
};

const logoutUser=async(req,res)=>{
    try{
    const {token}=req;
    let user=await User.findOne({_id:req.user._id});
    user.tokens=user.tokens.filter((userToken)=>userToken!==token);
    await user.save();
    return res.status(200).send();
    }catch(err){
        console.error(err);
        return res.status(500).send({message:err.message});
    }
};

const getAllStudents=async(req,res)=>{
    try{
        let studentList = await User.find({type: "STUDENT"});
        return res.status(200).send(studentList);
    }catch(err){
        console.error(err);
        return res.status(500).send({message:err.message});
    }
};

module.exports={addNewUser,loginUser,logoutUser,getAllStudents};