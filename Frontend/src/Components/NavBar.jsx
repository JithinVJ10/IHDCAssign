import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsPersonFill } from "react-icons/bs";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const user = JSON.parse(localStorage.getItem('name'))
    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

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
                <div className='flex'>
                    <div>
                    <BsPersonFill className='text-4xl' />
                    <p>{user}</p>
                    </div>
                </div>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
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
