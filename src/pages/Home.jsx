import React from "react";
import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Services from "../components/ui/Services";
import SmartPhones from "../components/Home/SmartPhones";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <SmartPhones />
      <FeaturedProducts />
      <Services />
    </>
  );
};

export default Home;
