import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import twilioRoute from './server/Route/TwilioRoute.js'
const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/otp',twilioRoute)

app.listen(3000,() => console.log("Server listening at port 3000"));