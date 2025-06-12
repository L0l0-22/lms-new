import React from 'react'
import MainSlider from '../Components/MainSlider'
import AllCategory from '../Components/AllCategory'
import Footer from '../Components/Footer'
import Features from '../Components/Features'
import HomeRegisterForm from '../Components/HomeRegisterForm'
import Navbar from '../Components/Navbar'
import Slider from './Slider'
import AboutSection from '../Components/AboutSection'
import Subscribe from '../Components/Subscribe'
import OfferNavbar from '../Components/OfferNavbar'
import About from '../Components/About'
import Learning from '../Components/Learning'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <MainSlider/>
    <AllCategory />
    <Features />
    <About/>
    <Slider/>
    <Learning/>
    {/* <HomeRegisterForm /> */}
    {/* <Subscribe/> */}
    {/* <AboutSection/> */}
    <Footer />
    </div>
  )
}
