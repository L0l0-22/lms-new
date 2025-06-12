/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf, BsPlus, BsDash, BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import img1 from "../assets/react.jpg";
import img2 from "../assets/react+ts.jpg";
import img3 from "../assets/next.jpg";
import MobileFiltersDrawer from "../Components/MobileFiltersDrawer";
import { MdOutlineDashboard } from "react-icons/md";

export default function SearchResults() {
  const products = [
    {
      id: 1,
      name: "Web Development Bootcamp 2025",
      by: "CodeAcademy",
      hours: 45,
      lecuters: 120,
      image: img1,
      price: 19.99,
      oldPrice: 49.99,
      rating: 4.5,
      rate: 145,
      category: "Web Development",
      level: "Beginner",
      description: "A bootcamp that covers you need to know about web development from scratch."
    },
    {
      id: 2,
      name: "Data Science with Python - From Zero to Hero",
      by: "Data Masters",
      hours: 75,
      lecuters: 98,
      image: img2,
      price: 39.99,
      oldPrice: 79.99,
      rating: 5,
      rate: 220,
      category: "Data Science",
      level: "Advanced",
      description: "Master data science using Python in this extensive course designed for advanced learners."
    },
    {
      id: 3,
      name: "UI/UX Design Principles for Beginners",
      by: "DesignPros",
      hours: 18,
      lecuters: 35,
      image: img3,
      price: 14.99,
      oldPrice: 29.99,
      rating: 4,
      rate: 100,
      category: "Design",
      level: "Beginner",
      description: "Learn the fundamentals of UI/UX design in this beginner-friendly course."
    },
  ];
  const [openAccordion, setOpenAccordion] = React.useState("rating");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };
  const [price, setPrice] = useState(500);

  const updatePrice = (value) => {
    setPrice(value);
  };
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="container mx-auto pt-1">
    <div className="mt-24 flex flex-col md:flex-row justify-between px-7 md:px-0 mx-auto container">
      <h1 className="p-0 md:p-5 text-2xl lg:text-4xl font-bold text-gray-700">Search Results For “Design”</h1>
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div className="flex justify-end space-x-4 mt-5">
            <div className="w-48 relative">
            <select
              onChange={(e) => {
                const value = e.target.value;
              }}
              className="appearance-none w-full px-3 py-2 rounded-md text-xs lg:text-sm font-medium shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-transparent bg-white text-gray-700"
            >
              <option value="">Sort By</option>
              <option value="most-reviewed">Most Reviewed</option>
              <option value="most-relevant">Most Relevant</option>
              <option value="highest-rated">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-500 text-sm">
              ▼
            </div>
            </div>
              <MobileFiltersDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                  <button className="block lg:hidden"
                      onClick={() => setDrawerOpen(true)}
                      >
                          <MdOutlineDashboard size={32} className="text-primaryGreen"/>
                  </button>
              </div>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row px-4 py-6 gap-6">
      {/* filter */}
      <div className="w-full hidden lg:block lg:w-1/4 space-y-4">
        {/* Rating  */}
        <div className="bg-white p-4 rounded shadow">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("rating")}
          >
            <h3 className="font-semibold">Rating</h3>
            {openAccordion === "rating" ? <BsDash /> : <BsPlus />}
          </div>
          {openAccordion === "rating" && (
            <div className="mt-3 space-y-2">
              {[ "4.5", "4.0", "3.5"].map((r) => (
                <button
                  key={r}
                  className="flex items-center space-x-2 text-sm py-1 px-2 rounded w-full text-left hover:bg-gray-100"
                >
                  <span>
                    { (
                      <>
                        {Array.from({ length: Math.floor(Number(r)) }).map((_, i) => (
                          <AiFillStar key={i} className="text-yellow-500 inline" />
                        ))}
                        {Number(r) % 1 !== 0 && <BsStarHalf className="text-yellow-500 inline" />}
                        &nbsp;and up
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Category  */}
        <div className="bg-white p-4 rounded shadow">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("category")}
          >
            <h3 className="font-semibold">Category</h3>
            {openAccordion === "category" ? <BsDash /> : <BsPlus />}
          </div>
          {openAccordion === "category" && (
            <div className="mt-3 space-y-2">
              {[ "Web Development", "Data Science", "Design", "AI & Machine Learning"].map((category) => (
                <button
                  key={category}
                  className="block text-sm py-1 px-2 rounded w-full text-left hover:bg-gray-100"
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Price  */}
        <div className="bg-white p-4 rounded shadow">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("price")}
          >
            <h3 className="font-semibold">Price</h3>
            {openAccordion === "price" ? <BsDash /> : <BsPlus />}
          </div>
          {openAccordion === "price" && (
            <div className="mt-3">
          <input
            type="range"
            id="price-range"
            className="w-full accent-blue-600"
            min="0"
            max="1000"
            value={price}
            onChange={(e) => updatePrice(e.target.value)}
          />
            <div className="flex justify-between text-gray-500 mt-4">
              <span id="minPrice">${price}</span>
              <span id="maxPrice">$1000</span>
            </div>
            </div>
          )}
        </div>
        {/* Level  */}
        <div className="bg-white p-4 rounded shadow">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("level")}
          >
            <h3 className="font-semibold">Level</h3>
            {openAccordion === "level" ? <BsDash /> : <BsPlus />}
          </div>
          {openAccordion === "level" && (
            <div className="mt-3 space-y-2">
              {[ "Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  className="block text-sm py-1 px-2 rounded w-full text-left hover:bg-gray-100"
                >
                  {level}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Duration  */}
        <div className="bg-white p-4 rounded shadow">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("duration")}
          >
            <h3 className="font-semibold">Duration</h3>
            {openAccordion === "duration" ? <BsDash /> : <BsPlus />}
          </div>
          {openAccordion === "duration" && (
            <div className="mt-3 space-y-2">
              {["0 - 7 Hour", "7 - 24 Hour", "24 - 72 Hour"].map((duration) => (
                <button
                  key={duration}
                  className="block text-sm py-1 px-2 rounded w-full text-left hover:bg-gray-100"
                >
                  {duration}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-3/4 grid grid-cols-1 ">
        {products.map((product) => {
          const fullStars = Math.floor(product.rating);
          const hasHalfStar = product.rating - fullStars >= 0.5;
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

          return (
            <div key={product.id} className="bg-white overflow-hidden rounded shadow-sm flex gap-4 p-3">
              <div className="w-1/4 relative">
              <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[4/3] object-cover md:h-36 md:aspect-auto rounded"
                />
                <Link to="/coursedetails" className="absolute w-full h-32 top-0 left-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-40" />
              </div>
              <div className="flex-1">
                <h2 className="font-medium text-black text-sm">{product.name}</h2>
                <p className="font-light text-xs text-black">{product.by}</p>
                <p className="text-gray-700 text-sm mt-2">{product.description}</p>

                <div className="flex items-center mt-1">
                  <p className="text-yellow-600 mr-2 font-bold text-sm">{product.rating}</p>
                  {[...Array(fullStars)].map((_, i) => (
                    <AiFillStar key={`full-${i}`} className="text-yellow-600 text-sm" />
                  ))}
                  {hasHalfStar && <BsStarHalf className="text-yellow-600 text-sm" />}
                  {[...Array(emptyStars)].map((_, i) => (
                    <AiOutlineStar key={`empty-${i}`} className="text-gray-300 text-sm" />
                  ))}
                  <p className="text-gray-500 ml-2 text-sm">({product.rate})</p>
                </div>

                <div className="flex space-x-2 mt-1 text-sm text-gray-500">
                  <p>{product.hours} hours</p>
                  <span>•</span>
                  <p>{product.lecuters} lectures</p>
                </div>

                <div className="flex space-x-3 mt-2">
                  <p className="text-sm font-medium text-primaryBlue">${product.price.toFixed(2)}</p>
                  <p className="text-sm font-medium text-gray-500 line-through">${product.oldPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}