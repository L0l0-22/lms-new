import React from 'react'
import bg from "/webapps/lms_react/src/assets/Group 216@2x.png"

export default function Subscribe() {
  return (
    <div className="relative h-full flex justify-center items-center py-10">
      <img src={bg} className="absolute w-full h-full object-none md:object-fill z-0" alt="background" />
      <div className="relative z-10 text-center text-white px-4 container">
        <p className='text-4xl font-bold'>Subscribe to Our Newsletter and Stay Updated on<br/> Every Course Release!</p>
        <p className='text-lg mt-2 text-gray-100'>join our newsletter and be the first to know!.</p>
        <form className="mt-6 flex w-full max-w-3xl mx-auto relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-4 rounded-bl-3xl rounded-tr-3xl text-black focus:outline-none"
          />
          <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-primaryGreen px-6 py-2 rounded-tr-3xl rounded-bl-3xl  font-semibold hover:bg-[#7fb742] transition"
            >
                Subscribe
            </button>
        </form>
      </div>
    </div>
  )
}
