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
        const { phoneNumber, countryCode } = req.body;
        

          const otpResponse = await client.verify.v2
            .services(serviceSid)
            .verifications.create({
              to: countryCode+phoneNumber,
              channel: "sms",
            });
         
          res.status(201).json({ success:true, phoneNumber, message: "OTP send successfully" });
        
       
      } catch (error) {
        console.log(error);
        next(error)
      }
      
};

//verify OTP
const verifyOTP = async (req, res,next) => {
    const { phoneNumber, countryCode, verificationCode } = req.body;
    console.log(phoneNumber);
    
  
    if (!phoneNumber) {
        const error = new Error("Phone number is required");
        error.statusCode = 409; // You can set a custom status code if needed
        throw error; // Throw the error
    }
  
    try {
      // Verify the SMS code entered by the user
      console.log(serviceSid);
      const verification_check = await client.verify.v2
        .services(serviceSid)
        .verificationChecks.create({ to : countryCode + phoneNumber , code : verificationCode})
  
      if (verification_check.status === 'approved') {
        // If the verification is successful this
        console.log("sucess")
        res.status(201).json({success:true, message: "Successfully verified" });
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