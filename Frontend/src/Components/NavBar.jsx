import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../Route/RoutePath';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const user = JSON.parse(localStorage.getItem('name'))

    const navigate = useNavigate()

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = ()=>{
    try {
        setIsOpen(false);
        localStorage.removeItem('name')
        localStorage.removeItem('phoneNumber')
        setTimeout(()=>{
            navigate(LOGIN)
        },2000)
    } catch (error) {
        console.log(error)
    }
  }

    // Array containing navigation items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Dashboard' },
        { id: 3, text: 'Products' },
        { id: 4, text: 'Transactions' },
        { id: 5, text: 'Journal' },
    ];

    return (
        <>
            <div className='flex justify-between h-24 max-w-[1240px] mx-auto px-4'>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex px-48'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 hover:font-semibold m-2 cursor-pointer duration-300 '
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Person Icon */}
                <div className="relative">
                    <div>

                    <button
                        onClick={toggleDropdown}
                        className=" items-center px-4 py-2  rounded focus:outline-none "
                    >
                        <BsPersonFill className="text-4xl mr-2" />
                        <p>{user}</p>
                    </button>
                    </div>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    {/* Dropdown content here */}
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                        onClick={()=>handleLogout()}
                    >
                        Logout
                    </a>
                    </div>
                )}
                </div>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 text-white border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NavBar;
