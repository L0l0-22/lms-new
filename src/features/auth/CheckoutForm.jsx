

import React, { useState } from "react";
import checkoutimg from "/webapps/lms_react/src/assets/checkout.png";
import newslettericon from "/webapps/lms_react/src/assets/Newsletter.png";
import mob5 from "/webapps/lms_react/src/assets/mob5.png";
import '/webapps/lms_react/src/styles/Auth/Checkout.css'
import { FiCreditCard } from 'react-icons/fi';

export default function CheckoutForm() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value === selectedOption ? null : value);
    };

    return (
        <div>
            <div className="sofware-background">
                <picture>
                    <source className="img" media="(max-width:767px)" srcset={mob5} />
                    <source className="img" srcset={checkoutimg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source media="(min-width: 1024px)" srcset={checkoutimg} />
                    <img className="img" src={checkoutimg} />
                </picture>
                <div className=" container overlay-text-bg px-4">
                    <h2>Shopping Cart</h2>
                    <p>
                        <span style={{ fontWeight: "500" }}> / Checkout </span>
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 mb-10">
                <div className="flex flex-col md:flex-row md:gap-8">
                    {/* Left side - Form */}
                    <div className="w-full md:w-1/2">
                        <div className="checkout-form-title">
                            <h6>Personal Info</h6>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="exampleInputfirstname" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputfirstname"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label htmlFor="exampleInputlastname" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputlastname"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Address */}
                                <div>
                                    <label htmlFor="exampleInputaddress" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputaddress"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Contact */}
                                <div>
                                    <label htmlFor="exampleInputcontact" className="block text-sm font-medium text-gray-700">
                                        Contact
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputcontact"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label htmlFor="exampleInputcountry" className="block text-sm font-medium text-gray-700">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputcountry"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* City */}
                                <div>
                                    <label htmlFor="exampleInputcity" className="block text-sm font-medium text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputcity"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* State */}
                                <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                        State
                                    </label>
                                    <select
                                        id="state"
                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                                {/* Zip Code */}
                                <div>
                                    <label htmlFor="exampleInputzip" className="block text-sm font-medium text-gray-700">
                                        Zip Code
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputzip"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Note - full width */}
                                <div className="md:col-span-2">
                                    <label htmlFor="exampleInputnote" className="block text-sm font-medium text-gray-700">
                                        Note
                                    </label>
                                    <input
                                        type="text"
                                        id="exampleInputnote"
                                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right side - Order Summary */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0  flex items-center justify-center padding-summary">
                        <div className="order-summary">
                            <h5>Your Order Summary</h5>

                            <div className="orderrow flex items-start gap-4 border-b py-2">
                                <p className="w-1/6">1x</p>
                                <p className="w-3/6">How to learn <br /> JavaScript Lorem</p>
                                <p className="w-2/6 text-right">100.00$</p>
                            </div>

                            <div className="subtotal-sec flex justify-between py-1">
                                <span>Subtotal</span>
                                <p>$60.00</p>
                            </div>
                            <div className="subtotal-sec flex justify-between py-1">
                                <span>Shipping</span>
                                <p>$15.00</p>
                            </div>
                            <div className="tax-sec flex justify-between py-1">
                                <span>Tax</span>
                                <p>$10.00</p>
                            </div>
                            <div className="total-sec flex justify-between font-bold py-2">
                                <span>Total</span>
                                <p>$625</p>
                            </div>

                            <div className="payment-sec">
                                {/* <span className="block font-medium mb-2">Payment</span> */}
                                {/* <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            value="credit"
                                            checked={selectedOption === 'credit'}
                                            onChange={handleOptionChange}
                                        />
                                        Credit Card
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            value="cash"
                                            checked={selectedOption === 'cash'}
                                            onChange={handleOptionChange}
                                        />
                                        Cash
                                    </label>
                                </div> */}

<button className="mt-10 w-full bg-primaryBlue text-white py-2 rounded-md hover:bg-[#007bbd] transition duration-300 flex items-center justify-center gap-2">
  Checkout <FiCreditCard size={18} />
</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div class="bg-[#4878E6] h-[196px] bg-no-repeat bg-cover">

                <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                    <div class="cardnewsletter w-[500px] md:w-full mt-14">
                        <div class="flex items-center space-x-10">
                            <img src={newslettericon} class="w-[89] h-[87]" />
                            <div>
                                <h5 class="text-white text-[24px] font-bold ">Join our newsletter now!</h5>
                                <p class="text-white text-sm ">Register now and get our latest updates and promos</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4 justify-start md:justify-center mt-4">
                        <input type="text" placeholder="Enter your email" class="p-3 w-full md:w-80 rounded-md border-none" />
                        <button class="bg-gray-800 text-white font-bold px-6 py-3 rounded-lg mt-3 md:mt-0">
                            Join
                        </button>
                    </div>

                </div>

            </div> */}

        </div>
    );
}
