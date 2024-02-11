import React, { useEffect, useState } from 'react';
import OTPModel from '../Components/OTPModel';
import { axiosInstance } from '../axios/axiosIntance';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../Route/RoutePath';
import Header from '../Components/Header';
import celeb from '../assets/celeb.png';

const Login = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('name'));

  useEffect(() => {
    if (user) {
      navigate(HOME);
    }
  }, []);

  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    if (!countryCode) {
      setErrors((prevErrors) => ({ ...prevErrors, countryCode: 'Please choose a country code' }));
      setTimeout(() => {
        setErrors({})
      }, 2000);
      formIsValid = false;
    }

    if (!phoneNumber) {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'Please enter your phone number' }));
      setTimeout(() => {
        setErrors({})
      }, 2000);
      formIsValid = false;
    }


    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Please enter your name' }));
      setTimeout(() => {
        setErrors({})
      }, 2000);
      formIsValid = false;
    }

    // Add more validation logic here for other fields if needed

    if (formIsValid) {
      try {
        axiosInstance.post('/otp/SendOTP', { phoneNumber, countryCode }).then((res) => {
          if (res.data.success) {
            toast.success('OTP Sent Successfully');
            setShowModal(true);
          }
        });
      } catch (error) {
        toast.error(error.message ||error?.response?.data?.message || 'Network Error')
        console.log(error);
      }
    }
  };

  const action = () => {
    try {
      axiosInstance.post('/otp/OTPverify', { phoneNumber, countryCode, verificationCode }).then((res) => {
        if (res.data.success) {
          toast.success('Success');
          localStorage.setItem('name', JSON.stringify(name));
          localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber));
          navigate(HOME);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <main className='flex flex-col md:flex-row'>
        <ToastContainer />
        <OTPModel showModal={showModal} setShowModal={setShowModal} action={action} verificationCode={verificationCode} setVerificationCode={setVerificationCode} />
        <div className='px-4 py-6 md:px-12 md:py-8 flex flex-col justify-center items-center'>
          <p className='text-2xl md:text-5xl text-cyan-400 text-center mb-6'>Unlock Exclusive Benefits</p>
          <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-sm'>
            <label htmlFor='countryCode' className='text-sm mb-1'>PHONE NUMBER</label>
            <div className='flex w-full mb-4'>
              <select
                id='countryCode'
                onChange={(e) => setCountryCode(e.target.value)}
                value={countryCode}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option value='none'>Country Code</option>
                <option value='+91'>+91 India</option>
                <option value='+1'>+1 USA</option>
              </select>
              <input
                type='number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={10}
                className='border border-gray-300 rounded-full py-2 px-4 ml-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full'
                
              />
              
            </div>
            {errors.countryCode && <p className='text-red-500 text-sm ml-2'>{errors.countryCode}</p>}
              {errors.phoneNumber && <p className='text-red-500 text-sm'>{errors.phoneNumber}</p>}
            <label htmlFor='name' className='text-sm mb-1'>NAME</label>
            <input
              type='text'
              maxLength={30}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border border-gray-300 rounded-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full'
              
            />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
            <label htmlFor='email' className='text-sm mb-1'>EMAIL [OPTIONAL]</label>
            <input
              type='email'
              value={email}
              maxLength={35}
              onChange={(e) => setEmail(e.target.value)}
              className='border border-gray-300 rounded-full py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full'
              
            />
            <button
              type='submit'
              className='bg-cyan-300 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-full w-full'
            >
              CONTINUE
            </button>
            <p className='text-sm text-slate-400 text-center mt-2'>Get ready to receive a secret code (OTP) on your phone</p>
          </form>
        </div>
        <div className='Img'>
          <img src={celeb} alt='' width={700} />
        </div>
      </main>
    </>
  );
};

export default Login;
