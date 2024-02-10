import twilio from 'twilio';
import dotenv from 'dotenv';


dotenv.config();


// Retrieve Twilio credentials and service SID from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;

// Create a Twilio client
const client = twilio(accountSid, authToken);


//send OTP
const sendOTP = async (req, res, next) => {
    console.log("sms");
      try {
        const { phone } = req.body;
        

          const otpResponse = await client.verify.v2
            .services(serviceSid)
            .verifications.create({
              to: "+91"+phone,
              channel: "sms",
            });
         
          res.status(201).json({ suceess:true, phone, message: "OTP send successfully" });
        
       
      } catch (error) {
        console.log(error);
        next(error)
      }
      
};

//verify OTP
const verifyOTP = async (req, res,next) => {
    const verificationCode =req.body.verificationCode;
    const phone = req.body.phone;
    console.log(phone);
    
  
    if (!phone) {
        const error = new Error("Phone number is required");
        error.statusCode = 409; // You can set a custom status code if needed
        throw error; // Throw the error
    }
  
    try {
      // Verify the SMS code entered by the user
      console.log(serviceSid);
      const verification_check = await client.verify.v2
        .services(serviceSid)
        .verificationChecks.create({ to : '+91' + phone , code : verificationCode})
  
      if (verification_check.status === 'approved') {
        // If the verification is successful this

        res.status(201).json({suceess:true, message: "Successfully verified" });
      } else {
        const error = new Error("OTP Verification faild");
        error.statusCode = 409; // You can set a custom status code if needed
        throw error; // Throw the error
      }
    } catch (error) {
      console.log(error);
      next(error)
  }
  
};

export {sendOTP, verifyOTP}