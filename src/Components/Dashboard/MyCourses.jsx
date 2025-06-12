import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs"; 
import img1 from "/webapps/lms_react/src/assets/react.jpg";
import img2 from '/webapps/lms_react/src/assets/react+ts.jpg';
import img3 from "/webapps/lms_react/src/assets/next.jpg";
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Pro Frontend Engineer ReactJS + TypeScript + Redux - بالعربى",
    by: "Muhammad Naga (Codeawy)",
    image: img1,
    progress: 80,
    rating: 4.5,
    rate: 120,
  },
  {
    id: 2,
    name: "Advanced React: Design System, Design Patterns, Performance",
    by: "Muhammad Naga (Codeawy)",
    image: img2,
    progress: 50,  
    rating: 5,
    rate: 200,
  },
  {
    id: 3,
    name: "Next.js 15 & React - The Complete Guide",
    by: "Muhammad Naga (Codeawy)",
    image: img3,
    progress: 30, 
    rating: 3,
    rate: 85,
  },
];

export default function MyCourses() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 m-3 md:m-0 md:ml-6">
      {products.map((product) => {
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
          <div key={product.id} className="bg-white overflow-hidden relative rounded shadow-sm p-2">
           <div className="relative group w-full h-52 overflow-hidden">
            <Link to="/studentCourses">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </Link>
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={() => toggleDropdown(product.id)}
                className="text-black bg-white hover:bg-gray-200 p-2 rounded-md shadow-md transition"
              >
                <BsThreeDotsVertical />
              </button>
              {openDropdown === product.id && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                  <ul className="py-2">
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      View Details
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Edit Course
                    </li>
                    <li className="px-4 py-2 text-sm text-red-500 hover:bg-red-100 cursor-pointer">
                      Delete Course
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>


            <div className="pt-3">
              <h2 className="font-medium text-black text-sm truncate">{product.name}</h2>
              <p className="font-light text-xs text-black">{product.by}</p>

              <div className="mt-2">
                <div className="relative pt-1">
                  <div className="flex items-center justify-between">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-teal-500 h-1 rounded-full"
                        style={{ width: `${product.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">{product.progress}% Complete</p>

                    <div className="flex items-center space-x-0.5">
                      {[...Array(fullStars)].map((_, i) => (
                        <AiFillStar key={`full-${i}`} className="text-yellow-600 text-xs" />
                      ))}
                      {hasHalfStar && <BsStarHalf className="text-yellow-600 text-xs" />}
                      {[...Array(emptyStars)].map((_, i) => (
                        <AiOutlineStar key={`empty-${i}`} className="text-gray-300 text-xs" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs text-right mt-1">Your rating</p>
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}