import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { BlacklistTokenModel } from "../models/blacklistToken.model.js";

export const authUser = async(req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({message: "Not authorized"})
    }

    const isBlacklisted = await BlacklistTokenModel.findOne({token:token})
    if(isBlacklisted){
        return res.status(401).json({message: "Not authorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const user = await UserModel.findById(decoded._id)
        req.user = user
        next()
    } catch (error) {
            res.status(401).json({message: "Not authorized"})
    }

}