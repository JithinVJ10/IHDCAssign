import twilio from 'twilio'; 
import dotenv from 'dotenv';

dotenv.config()

const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
const serviceSid = process.env.REACT_APP_TWILIO_SERVICE_SID;

const client = new twilio(accountSid, authToken);

//send OTP
export const sendOTP = async (phone, countryCode) => {

    try {

        const otpResponse = await client.verify.services(serviceSid)
            .verifications.create({
                to: countryCode + phone,
                channel: "sms",
            });
            


    } catch (error) {
        console.log(error);
    }

};

//verify OTP
export const verifyOTP = async (verificationCode, phone, countryCode) => {

    console.log(phone);


    if (!phone) {
        const error = new Error("Phone number is required");
        error.statusCode = 409; // You can set a custom status code if needed
        throw error; // Throw the error
    }

    try {
        // Verify the SMS code entered by the user
        console.log(serviceSid);
        const verification_check = await client.verify.services(serviceSid)
            .verificationChecks.create({ to: countryCode + phone, code: verificationCode })

        if (verification_check.status === 'approved') {
            console.log('Success')
            return true
        } else {
            const error = new Error("OTP Verification failed");
            error.statusCode = 409; // You can set a custom status code if needed
            throw error; // Throw the error
        }
    } catch (error) {
        console.log(error);
    }

};
