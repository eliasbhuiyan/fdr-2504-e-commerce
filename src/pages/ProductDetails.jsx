import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from '../components/ui/Arrows';

const ProductDetails = () => {
    const [selectedSize, setSelectedSize] = useState("xl");
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const settingsLarge = {
        dots: false,
        slidesToShow: 1,
        arrows: false,
    };

    const settingSmalls = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const SIZES = ["sm", "lg", "xl", "xxl"]
    return (
        <section className='py-14'>
            <div className="container grid grid-cols-2">
                <div className='grid grid-cols-4 gap-10'>
                    <Slider className='max-w-xl col-span-3' {...settingsLarge} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                        <div>
                            <img src="/product-1.png" alt="" className='w-full' />
                        </div>
                        <div>
                            <img src="/product-2.png" alt="" className='w-full' />
                        </div>
                        <div>
                            <img src="/product.jpg" alt="" className='w-full' />
                        </div>
                        <div>
                            <img src="/product-2.png" alt="" className='w-full' />
                        </div>
                    </Slider>
                    <Slider
                        asNavFor={nav1}
                        ref={slider => (sliderRef2 = slider)}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        {...settingSmalls}
                    >
                        <div>
                            <img src="/product-1.png" alt="" className='w-3/4' />
                        </div>
                        <div>
                            <img src="/product-2.png" alt="" className='w-3/4' />
                        </div>
                        <div>
                            <img src="/product.jpg" alt="" className='w-3/4' />
                        </div>
                        <div>
                            <img src="/product-2.png" alt="" className='w-3/4' />
                        </div>
                    </Slider>
                </div>
                <div>
                    Product Details
                    <div className='flex gap-2 items-center'>
                        <p className='text-lg'>Size</p>
                        {
                            SIZES.map((item) => (
                                <label key={item} htmlFor={item} className={`uppercase cursor-pointer py-1 px-2.5 border border-secondary/10 ${selectedSize === item && "bg-brand text-white"} `}>
                                    {item}
                                    <input onChange={(e) => setSelectedSize(e.target.value)} value={item} type="radio" name="size" id={item} hidden />
                                </label>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
