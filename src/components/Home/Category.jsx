import React from 'react'
import { FaShirt } from 'react-icons/fa6'
import { MdArrowForwardIos, MdOutlineHealthAndSafety, MdOutlineToys } from 'react-icons/md'
import { Link } from 'react-router'

const Category = () => {
    const categories = [
        {
            title: "Health & Household",
            icon: MdOutlineHealthAndSafety
        },
        {
            title: "Kids Fashion",
            icon: FaShirt
        },
        {
            title: "Toys",
            icon: MdOutlineToys
        },
        {
            title: "Groceries",
            icon: MdOutlineToys
        },
        {
            title: "Men Fashion",
            icon: MdOutlineToys
        },
        {
            title: "Women’s Fashion",
            icon: MdOutlineToys
        },
        {
            title: "Stationary & Books",
            icon: MdOutlineToys
        },
        {
            title: "Jewelleries ",
            icon: MdOutlineToys
        },
        {
            title: "Watches",
            icon: MdOutlineToys
        },
        {
            title: "Men Style",
            icon: MdOutlineToys
        },
        {
            title: "Tools & Hardware",
            icon: MdOutlineToys
        },
        {
            title: "Pet Supplies",
            icon: MdOutlineToys
        },
        {
            title: "Seasonal",
            icon: MdOutlineToys
        },
        {
            title: "Leather Goods",
            icon: MdOutlineToys
        },
        {
            title: "Panjabi & Paijama",
            icon: MdOutlineToys
        },

    ]
    return (
        <section className='py-12'>
            <div className="container">
                <h3 className='sub_head'>Category</h3>

                <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5'>
                    {
                        categories.map((item) => (
                            <Link key={item.title} to="/" className='p-4 shadow flex items-center rounded-xl'>
                                <item.icon className='text-3xl' />
                                <p className='pl-2.5 font-normal text-base text-secondary'>{item.title}</p>
                                <MdArrowForwardIos className='text-[#999999] ml-auto' />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Category
