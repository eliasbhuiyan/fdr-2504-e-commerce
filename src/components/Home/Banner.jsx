import React from 'react'
import { Link } from 'react-router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const Banner = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        arrows: false,
        appendDots: dots => (
            <div>
                <ul className='flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2'> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <button className='w-1 md:w-3 h-1 md:h-3 rounded-full bg-white'></button>
        )
    };
    return (
        <section className='pt-3 pb-12'>
            <div className="container flex gap-4 md:gap-7">
                <div className='w-[66%]'>
                    <Slider {...settings}>
                        <Link to="/">
                            <img src="/hero_banner.png" alt="hero banner" className='w-full' />
                        </Link>
                        <Link to="/">
                            <img src="/hero_banner.png" alt="hero banner" className='w-full' />
                        </Link>
                        <Link to="/">
                            <img src="/hero_banner.png" alt="hero banner" className='w-full' />
                        </Link>
                        <Link to="/">
                            <img src="/hero_banner.png" alt="hero banner" className='w-full' />
                        </Link>
                    </Slider>
                </div>
                <div className='w-[34%] flex flex-col space-y-4 md:space-y-7'>
                    <Link to="/">
                        <img src="/hero-1.png" alt="hero-1" className='w-full' />
                    </Link>
                    <Link to="/">
                        <img src="/hero-2.png" alt="hero-2" className='w-full' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
