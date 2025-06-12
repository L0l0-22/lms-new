import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CheckoutForm from '../features/auth/CheckoutForm'

export default function CheckoutPage() {
  return (
    <div>
        <Navbar/>
        <CheckoutForm />
        <Footer/>

    </div>
  )
}
