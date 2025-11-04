import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req,res,next)=>{
  try{
    const {email,password} = req.body;
    const hash = await bcrypt.hash(password,10);
    const user = await User.create({email,password:hash});
    res.status(201).json({msg:"User created",userId:user._id});
  }catch(err){ next(err); }
};

export const login = async (req,res,next)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401).json({msg:"Invalid credentials"});
    const ok = await bcrypt.compare(password,user.password);
    if(!ok) return res.status(401).json({msg:"Invalid credentials"});
    const token = jwt.sign({id:user._id,role:user.role}, process.env.JWT_SECRET, {expiresIn:"8h"});
    res.json({token});
  }catch(err){ next(err); }
};
