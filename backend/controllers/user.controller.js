import { UserModel } from "../models/user.model.js";
import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";

export const registerUser = async(req,res, next)=>{
    try{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password} = req.body 

    const hashedPassword = await UserModel.hashPassword(password)

    const user = await createUser({ firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword})

    const token = user.generateAuthtoken()

    res.status(201).json({token,user})
}catch(err){
    res.status(500).json({
        success:false,
        message:err.message
    })
}
}