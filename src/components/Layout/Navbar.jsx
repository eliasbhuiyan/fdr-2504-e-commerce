import React from 'react'
import { Link } from 'react-router'
import Input from '../ui/Input'
import { IoSearch } from 'react-icons/io5'
import Button from '../ui/Button'
import { FaRegUser } from 'react-icons/fa'
import { BsCart4 } from 'react-icons/bs'

const Navbar = () => {
    const categories = [
        "Women's Fashion",
        "men's Fashion",
        "Kid's Fashion",
        "Home & Lifestyle",
        "Arts & Crafts",
        "Computer & Electronics",
        "Food & Grocery"
    ]
    return (
        <header>
            <nav className='py-8'>
                <div className="container flex justify-between flex-wrap md:flex-nowrap gap-5">
                    <Link to="/" className='order-1'>
                        <img src="/logo.png" alt="logo" />
                    </Link>
                    <div className='flex bg-[#F1F1F1] items-center h-fit rounded-md w-full md:max-w-md xl:max-w-3xl order-3 md:order-2'>
                        <Input placeholder="I'm looking for..." className='border-none' />
                        <Button className='rounded-l-none px-5'>
                            <IoSearch className='text-xl' />
                        </Button>
                    </div>
                    <div className='flex gap-5 md:gap-10 order-2 md:order-3'>
                        <Link to="/login" className='flex gap-1.5 items-center text-base font-normal text-primary'><FaRegUser className='text-xl' /> <span className='hidden md:block'>Login</span></Link>
                        <Link to="/shop" className='flex gap-1.5 items-center text-base font-normal text-primary'><BsCart4 className='text-xl' /> <span className='hidden md:block'>My Cart </span><span className='w-5 h-5 rounded-full text-white flex items-center justify-center bg-red-500 text-sm'>1</span></Link>
                    </div>
                </div>
            </nav>
            <div className='w-full pb-2.5 border-b border-b-[#EFEEEE]'>
                <div className='container'>
                    <ul className='flex gap-14 justify-center items-center px-5 overflow-x-auto'>
                        {
                            categories.map((item) => (
                                <li key={item}>
                                    <Link to="/" className='text-base font-medium text-primary uppercase text-nowrap'>{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
