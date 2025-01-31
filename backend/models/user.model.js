import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = mongoose.Schema({
    fullname:{
        firstName:{
            type:String,
            required:true,
            min: [3, "First name must be at least 3 characters long"]
        },
        lastName:{
            type:String,
            required:true,
            min: [3, "Last name must be at least 3 characters long"]
        },

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select: false,
    },
    socketId:{
        type:String,
    }
})

userSchema.methods.generateAuthtoken = ()=>{
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET_KEY)
    return token
}

userSchema.methods.comparePassword = async(password)=>{
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword = async(password)=>{
    return await bcrypt.hashPassword(password,10)
}

export const UserModel = mongoose.model("User", userSchema)