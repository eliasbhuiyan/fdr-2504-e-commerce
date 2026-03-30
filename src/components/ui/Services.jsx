import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaRegCreditCard, FaStar } from 'react-icons/fa'
import { FaClockRotateLeft } from 'react-icons/fa6'

const Services = () => {
  return (
    <section className='py-12'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className='flex gap-4.5 items-center justify-center'>
                <CiDeliveryTruck className='text-6xl text-brand'/>
                <div>
                    <h4 className='text-xl font-bold text-primary'>FREE SHIPPING</h4>
                    <p className='text-base font-medium text-secondary'>Order via Campaign</p>
                </div>
            </div>
            <div className='flex gap-4.5 items-center justify-center'>
                <FaStar className='text-6xl text-brand'/>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Best Price</h4>
                    <p className='text-base font-medium text-secondary'>Quality products</p>
                </div>
            </div>
            <div className='flex gap-4.5 items-center justify-center'>
                <FaClockRotateLeft className='text-5xl text-brand'/>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Free Retern</h4>
                    <p className='text-base font-medium text-secondary'>Within 7 days returns</p>
                </div>
            </div>
            <div className='flex gap-4.5 items-center justify-center'>
                <FaRegCreditCard className='text-5xl text-brand'/>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Secure Payment</h4>
                    <p className='text-base font-medium text-secondary'>100% secure payment</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services