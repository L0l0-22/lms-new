import React from 'react'
import user from "../assets/Mask Group 356.png";
import bg from "../assets/background.png";
import mob from "../assets/mob2.png";
import { IoMdClose } from 'react-icons/io';
import vedio from "../assets/vedio2.png";
import { Link } from 'react-router-dom';

export default function Shoppingcart() {
    const courses = [
        {
          id: 1,
          name: 'How to learn JavaScript Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          price: 59.99,
          quantity: 2,
          image: vedio,
        },
        {
          id: 2,
          name: 'How to learn JavaScript Lorem Ipsum is simpl dummy text of the printing and typesetting industry.',
          price: 120.0,
          quantity: 1,
          image: vedio,
        },
      ];

  return (
    <>
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <div className="absolute inset-0 z-10">
          <picture>
            <source media="(max-width: 767px)" srcSet={mob} />
            <source media="(min-width: 768px)" srcSet={user} />
            <img
              src={user}
              alt="foreground"
              className="w-full h-full object-contain"
            />
          </picture>
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center text-white container mx-auto w-[90%] md:w-[80%] lg:w-[90%] text-left">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2">Shopping Cart</h2>
          <p className="text-xs sm:text-sm md:text-base">
            Home / Courses
            <span className="font-semibold ml-1 block md:inline">/ Shopping Cart</span>
          </p>
        </div>
      </div>
      <div className="my-10 sm:my-16 md:my-20 w-[90%] mx-auto">
        <div className="hidden md:block">
          <table className="min-w-full border border-gray-200 rounded-lg bg-gray-50">
            <thead className="text-gray-700">
              <tr>
                <th className="px-5 py-4 sm:py-6 md:py-8 text-left"></th>
                <th className="px-5 py-4 sm:py-6 md:py-8 text-left w-[32rem]">Product</th>
                <th className="px-5 py-4 sm:py-6 md:py-8 text-left">Price</th>
                <th className="px-5 py-4 sm:py-6 md:py-8 text-left">Quantity</th>
                <th className="px-5 py-4 sm:py-6 md:py-8 text-left">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((product) => {
                const subtotal = product.price * product.quantity;
                return (
                  <tr key={product.id} className="border-t">
                    <td className="px-5 py-4 sm:py-6 md:py-8">
                      <button className="hover:text-gray-500 text-red-500">
                        <IoMdClose size={20} className="font-bold" />
                      </button>
                    </td>
                    <td className="px-5 py-4 sm:py-6 md:py-8">
                      <div className="flex items-center gap-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
                        />
                        <span className="text-sm sm:text-base">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 sm:py-6 md:py-8">${product.price.toFixed(2)}</td>
                    <td className="px-5 py-4 sm:py-6 md:py-8">{product.quantity}</td>
                    <td className="px-5 py-4 sm:py-6 md:py-8">${subtotal.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-4">
          {courses.map((product) => {
            const subtotal = product.price * product.quantity;
            return (
              <div key={product.id} className="border border-gray-200 rounded-lg bg-gray-50 p-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3 w-[80%]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium line-clamp-2">{product.name}</p>
                      <p className="text-sm mt-1">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <button className="hover:text-gray-500 text-red-500">
                    <IoMdClose size={18} />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4 pt-3 border-t">
                  <div className="text-sm">
                    <span className="text-gray-500">Qty: </span>
                    <span>{product.quantity}</span>
                  </div>
                  <div className="font-medium">
                    ${subtotal.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='border border-gray-200 rounded-md bg-gray-50 flex justify-between px-4 py-6 sm:px-5 sm:py-8 mt-6 sm:mt-10'>
          <p className='font-medium text-base sm:text-lg'>Total</p>
          <p className='font-medium'>$1710.00</p>
        </div>
        
        <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[30%] mx-auto mt-6 sm:mt-10">
          <Link to="/checkout">
          <button 
            className="w-full p-2 sm:p-3 bg-primaryGreen text-white rounded-md hover:bg-[#76c13f] text-sm sm:text-lg"
          >
            Proceed to checkout
          </button>
          </Link>
        </div>
      </div>
    </>
  )
}