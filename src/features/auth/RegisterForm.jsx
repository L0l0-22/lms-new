import React, { useState } from 'react'
import logo from '/webapps/lms_react/src/assets/Logo-02.png'
import loginimg from "/webapps/lms_react/src/assets/Sign In Vec.svg";
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // You can use other themes if you prefer
export default function RegisterForm() {
    const [phone, setPhone] = useState('');



    return (
        <div className="min-h-screen flex flex-col md:flex-row h-screen">

            {/* Left image section */}
            <div className="hidden md:block  md:w-1/2">
                <img
                    src={loginimg}
                    alt="Login Visual"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right form section */}
            <div className="w-full md:w-1/2 flex  justify-center items-center  p-6">
                <div className="w-full max-w-xl">
                    <Link to="/">
                        <img src={logo} alt="LMS Logo" className="w-72 mb-12" />
                    </Link>

                    <h5 className="text-2xl font-semibold mb-2">Create Account</h5>
                    <h5 className="text-gray-600 mb-6">Don't have an account yet? Register here!</h5>

                    <form className="space-y-6">
                        {/* Name fields */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col w-100">
                                <label className="mb-2 text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    required
                                    className="h-[50px] w-full md:w-[250px] bg-white border border-gray-200 rounded px-3"
                                    placeholder='FirstName'
                                />
                            </div>
                            <div className="flex flex-col w-100">
                                <label className="mb-2 text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    required
                                    className="h-[50px] w-full md:w-[250px] bg-white border border-gray-200 rounded px-3"
                                    placeholder='LastName'

                                />
                            </div>
                        </div>


                        {/* Email & Phone */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col w-100">
                                <label className="mb-2 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="h-[50px] w-full md:w-[250px] bg-white border border-gray-200 rounded px-3"
                                    placeholder='Email'

                                />
                            </div>
                            <div className="flex flex-col w-full md:w-[250px]">
                                <label className="mb-2 text-sm font-medium">Phone</label>
                                <PhoneInput
                                    country={'eg'} // Egypt
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    inputStyle={{
                                        height: '50px',
                                        width: '100%',
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb', // Tailwind's border-gray-200
                                        borderRadius: '0.375rem', // rounded
                                        paddingLeft: '48px', // account for flag
                                        fontSize: '14px',
                                    }}
                                    buttonStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e5e7eb', // Tailwind's border-gray-200
                                    }}
                                    containerStyle={{
                                        width: '100%',

                                    }}
                                />
                            </div>

                        </div>


                        {/* Country select */}
                        <div className="flex flex-col w-100">
                            <label className="mb-2 text-sm font-medium">Country</label>
                            <select
                                name="country"
                                required
                                className="h-[50px] w-full md:w-[525px] bg-white border border-gray-200 rounded px-3"
                            >
                                <option value="">Select a Country</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                                <option value="Germany">Germany</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>


                        {/* Password fields */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col w-100">
                                <label className="mb-2 text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    className="h-[50px] w-full md:w-[250px] bg-white border border-gray-200 rounded px-3"
                                    placeholder='Password'

                                />
                            </div>
                            <div className="flex flex-col w-100">
                                <label className="mb-2 text-sm font-medium">Confirm Password</label>
                                <input
                                    type="password"
                                    name="Confirm_Password"
                                    required
                                    className="h-[50px] w-full md:w-[250px] bg-white border border-gray-200 rounded px-3"
                                    placeholder='Confirm Password'

                                />
                            </div>
                        </div>

                        {/* Submit button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full md:w-[525px] h-[50px] bg-lime-500 text-white font-bold rounded hover:bg-lime-600 transition"
                            >
                                Register
                            </button>

                        </div>

                        {/* Login redirect */}
                        <div className="text-center">
                            <p className="text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="text-green-500 hover:underline ml-1">
                                    Login here
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
