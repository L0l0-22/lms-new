import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsDash, BsPlus, BsStarHalf } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function MobileFiltersDrawer({
  drawerOpen,
  setDrawerOpen,
}) {
 const [openAccordion, setOpenAccordion] = React.useState("rating");
  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };
  const [price, setPrice] = useState(500);
  const updatePrice = (value) => {
    setPrice(value);
  };
  const cancelFilters = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-primaryBlue bg-opacity-30 transition-opacity duration-300 ease-in-out ${drawerOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h4 className="text-lg font-bold text-primaryBlue">Filter</h4>
          <button onClick={cancelFilters} className="flex text-primaryBlue text-sm">
            <IoClose size={22} className="text-primaryBlue" />
          </button>
        </div>
        {/* filter */}
              <div className="w-full p-6  space-y-4">
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
                <div className="my-9 w-[90%] mx-auto space-y-3">
            <button
              className="bg-primaryGreen p-2 text-white rounded-md w-full"
            >
              APPLY
            </button>
            <button
              onClick={cancelFilters}
              className="border-primaryBlue border p-2 text-primaryBlue rounded-md w-full"
            >
              CANCEL
            </button>
          </div>
              </div>

      </div>
    </div>
  );
}