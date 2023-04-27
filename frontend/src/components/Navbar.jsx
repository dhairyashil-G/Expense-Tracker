import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(0)

    const handleNav  = () =>{
        setNav(!nav)
    }
    return(
        <div className='flex justify-between items-center h-8 max-w-[1240px] text-[#0068df]'>
            <h1 className="w-full text-3xl font-bold text-[#0068df]">ExpenseTracker</h1>
        <ul className="hidden md:flex">
            <li className="p-4 text-2xl font-semibold">SignUp</li>
            <li className="p-4 text-2xl font-semibold">Login</li>
            {/* <li className="p-4">Contact</li> */}
        </ul>
        <div onClick={handleNav} className='block md:hidden'> 
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
            {/* <AiOutlineMenu size={20}/> */}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#0068df]">ExpenseTracker</h1>
            <ul className="uppercase p-4">
            <li className="p-4 text-2xl font-semibold">SignUp</li>
            <li className="p-4 text-2xl font-semibold">Login</li>
            </ul>
        </div>
    </div>
    )
    
}

export default NavBar