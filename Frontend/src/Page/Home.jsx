import React from 'react'
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Contents from '../Components/Contents/Contents';



const Home = () => {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <NavBar/>
    <Contents/>
    </>
  )
}

export default Home
