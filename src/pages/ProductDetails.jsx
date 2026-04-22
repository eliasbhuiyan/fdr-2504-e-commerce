import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../components/ui/Arrows";
import { useGetProductDetailsQuery } from "../services/api";
import { useParams } from "react-router";
import Button from "../components/ui/Button";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useGetProductDetailsQuery(id);
  console.log(data);

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
    prevArrow: <PrevArrow />,
  };

  const SIZES = ["sm", "lg", "xl", "xxl"];
  return (
    <section className="py-14">
      <div className="container grid grid-cols-2 gap-20">
        <div className="grid grid-cols-4 gap-10">
          <Slider
            className="max-w-xl col-span-3"
            {...settingsLarge}
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
          >
            {data?.images.map((item) => (
              <div key={item}>
                <img src={item} alt="" className="w-full" />
              </div>
            ))}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            {...settingSmalls}
          >
            {data?.images.map((item) => (
              <div key={item}>
                <img src={item} alt="" className="w-full" />
              </div>
            ))}
          </Slider>
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl text-primary">{data?.title}</h1>
          <p className="text-xl text-primary">{data?.description}</p>
          <h2 className="text-4xl text-primary">${data?.price}</h2>
          <div className="flex gap-2 items-center">
            <p className="text-lg">Size</p>
            {SIZES.map((item) => (
              <label
                key={item}
                htmlFor={item}
                className={`uppercase cursor-pointer py-1 px-2.5 border border-secondary/10 ${selectedSize === item && "bg-brand text-white"} `}
              >
                {item}
                <input
                  onChange={(e) => setSelectedSize(e.target.value)}
                  value={item}
                  type="radio"
                  name="size"
                  id={item}
                  hidden
                />
              </label>
            ))}
          </div>
          <div className="space-x-5">
            <Button>Add to cart</Button>
            <Button>Order Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
