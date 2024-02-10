import express from "express"
import { sendOTP, verifyOTP } from "../controller/twilioController.js"

const route = express.Router()


//OTP LOGIN
route.post('/SendOTP',sendOTP)
route.post('/OTPverify',verifyOTP)

export default route