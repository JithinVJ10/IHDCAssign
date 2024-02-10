import React, { useState } from 'react'
import OTPModel from '../Components/OTPModel'
import { axiosInstance } from '../axios/axiosIntance'
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import { HOME } from '../Route/RoutePath';
import Header from '../Components/Header';


const Login = () => {
    const [countryCode,setCountryCode] = useState()
    const [phoneNumber,setPhoneNumber] = useState()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [verificationCode,setVerificationCode] = useState()

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault()
        try {
           axiosInstance.post('/otp/SendOTP',{phoneNumber,countryCode}).then((res)=>{
            if (res.data.success) {
                toast.success("OTP Sent Successfully")
                setShowModal(true)
            }
           })
        } catch (error) {
            console.log(error)
        }
        
    }

    const action = ()=>{
        try {
            axiosInstance.post('/otp/OTPverify',{phoneNumber,countryCode,verificationCode}).then((res)=>{
                if (res.data.success) {
                    toast.success("Success")
                    
                    navigate(HOME)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <Header/>
      <main className='flex'>
      <ToastContainer/>
        <OTPModel showModal={showModal} setShowModal={setShowModal} action={action} 
            verificationCode={verificationCode} setVerificationCode={setVerificationCode}
        />
        <div className='px-32'>
            <div className='py-6'>
                <p className='text-5xl text-cyan-400'>Unlock Exclusive Benefits</p>
            </div>
            <form onSubmit={handleSubmit}>
            <p>PHONE NUMBER</p> 
             <div className='flex'>
                <div className=''>
                <select 
                    id="countryCode"
                    onChange={(e) => setCountryCode(e.target.value)} 
                    value={countryCode} // Add this line to bind the selected value to the state
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected value="none">Choose</option>
                    <option value="+91">+91 India</option>
                    <option value="+1">+1 USA</option>
                </select>
                </div>

                <div className='px-4'>
                    <input 
                    type="number"
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    /> 
                </div>
             </div>

             <div className='py-8'>
             <p>NAME</p>
             <input 
                type="text"
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                class="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-96" 
              />
             </div>

             <div className='py-6'>
             <p>EMAIL [OPTIONAL]</p>
              <input 
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-96" 
              />
             </div>

             <div>
                <button type='submit' class="bg-cyan-300 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-full w-96">
                    CONTINUE
                </button>
                <p className='text-sm text-slate-400'>Get ready to recieve a secret code (OTP) on your phone</p>
             </div>


            </form>
        </div>
        <div className='Img px-12'>
            <p>
                img
            </p>
        </div>
      </main>
    </>
  )
}

export default Login
