import { captainModel } from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { validationResult } from "express-validator";


export const registerCaptain = async(req, res, next)=>{
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {fullname, email, password, vehicle} = req.body

        const isCaptainAlreadyExist = await captainModel.findOne({email})
        if(isCaptainAlreadyExist)
        {
            return res.status(400).json({ message: "Captain already exist with same email Id" });
        }

        const hashedPassword = await captainModel.hashPassword(password)

        const captain = await createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email: email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        })

        const token = captain.generateAuthToken()

        res.status(201).json({token, captain})
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}