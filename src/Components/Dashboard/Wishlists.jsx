import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs"; 
import img1 from "/webapps/lms_react/src/assets/react.jpg";
import img2 from "/webapps/lms_react/src/assets/react+ts.jpg";
import img3 from "/webapps/lms_react/src/assets/next.jpg";
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Pro Frontend Engineer ReactJS + TypeScript + Redux - بالعربى",
    by: "Muhammad Naga (Codeawy)",
    hours: 72,
    lecuters: 22,
    image: img1,
    price: 29.99,
    oldPrice: 49.99,
    progress: 80,
    rating: 4.5,
    rate: 120,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Advanced React: Design System, Design Patterns, Performance",
    by: "Muhammad Naga (Codeawy)",
    hours: 72,
    lecuters: 22,
    image: img2,
    price: 49.99,
    oldPrice: 79.99,
    progress: 50,
    rating: 5,
    rate: 200,
    isBestSeller: false,
  },
  {
    id: 3,
    name: "Next.js 15 & React - The Complete Guide",
    by: "Muhammad Naga (Codeawy)",
    hours: 72,
    lecuters: 22,
    image: img3,
    price: 39.99,
    oldPrice: 59.99,
    progress: 30,
    rating: 3.5,
    rate: 85,
    isBestSeller: true,
  },
];

export default function Wishlists() {
  const [likedItems, setLikedItems] = useState({});
  return (
    <div className="flex flex-wrap md:flex-row flex-col gap-3">
      {products.map((product) => {
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-white rounded shadow relative ">
          <div className="relative w-full overflow-hidden">
            <Link to="/studentCourses">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
                />
            </Link>

            {product.isBestSeller && (
              <span className="absolute top-2 left-2 bg-[#1FB0C7] text-blue-950 text-xs px-3 py-1 rounded z-10">
                Best Seller
              </span>
            )}
            <div
              className="absolute top-1 text-lg right-2  text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setLikedItems((prev) => ({
                  ...prev,
                  [product.id]: !prev[product.id],
                }));
              }}
              
            >
              {likedItems[product.id] ? (
                <FaHeart className="text-red-600" />
              ) : (
                <FaRegHeart className="text-red-600" />
              )}
            </div>
          </div>


            <div className="pt-3">
              <h3 className="mt-3 text-sm font-semibold text-gray-800 truncate">
              {product.name}</h3>
              <p className="font-light text-xs text-black">{product.by}</p>

              <div className="flex items-center mt-1">
                <p className="text-yellow-600 mr-2 font-bold text-xs">{product.rating}</p>

                {[...Array(fullStars)].map((_, i) => (
                  <AiFillStar key={`full-${i}`} className="text-yellow-600 text-xs" />
                ))}

                {hasHalfStar && <BsStarHalf className="text-yellow-600 text-xs" />}

                {[...Array(emptyStars)].map((_, i) => (
                  <AiOutlineStar key={`empty-${i}`} className="text-gray-300 text-lg" />
                ))}

                <p className="text-gray-500 mx-3 text-sm">({product.rate})</p>
              </div>

              <div className="flex space-x-1 mt-1">
                <p className="text-gray-500 text-xs">{product.hours} hours .</p>
                <p className="text-gray-500 text-xs">{product.lecuters} lectures</p>
              </div>

              <div className="flex space-x-3 mt-2">
                <p className="text-sm font-bold text-primaryBlue">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm font-medium text-gray-500 line-through">
                  ${product.oldPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>   
  );
}