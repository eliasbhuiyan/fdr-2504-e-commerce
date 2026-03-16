import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/Category'
import FlashDeal from '../components/Home/FlashDeal'
import FeaturedProducts from '../components/Home/FeaturedProducts'

const Home = () => {
  return (
    <>
      <Banner />
      <Category/>
      <FlashDeal/>
      <FeaturedProducts/> 
    </>
  )
}

export default Home
