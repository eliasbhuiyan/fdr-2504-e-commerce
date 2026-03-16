import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router'
import ProductCard from '../ui/ProductCard'

const FeaturedProducts = () => {
    return (
        <section className='pb-12'>
            <div className="container">
                <div className='flex justify-between'>
                    <h3 className='sub_head'>Featured Product</h3>
                    <Link to="/" className='text-base font-normal text-secondary flex items-center gap-4'>View more <IoMdArrowForward />
                    </Link>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-1 md:gap-6'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts
