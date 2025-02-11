import express from "express"
import {body} from "express-validator"
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from "../controllers/captain.controller.js"
import { authCaptain } from "../middlewares/auth.middleware.js"

const router = express.Router()


router.post("/register",[
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min: 3}).withMessage("First name must be at least 3 characters long"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("Plate should be at least 3 characters long"),
    body("vehicle.capacity").isInt({min:1}).withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]).withMessage("Invalid vehicleType entered")
], registerCaptain)
router.post("/login", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
], loginCaptain)
router.get("/logout",authCaptain,logoutCaptain)
router.get("/profile",authCaptain,getCaptainProfile)


export default router