import { Request,Response } from "express";
import { User } from "../entities/User";


export const createUser =async (req:Request, res:Response)=> {

    const {email, name,lastname,phone,password} = req.body
    

    const user= new User();
    user.email= email;
    user.name= name;
    user.lastname= lastname;
    user.phone= phone;
    user.password= password;

    await user.save();


    console.log(user);
    res.send("helo world");

}