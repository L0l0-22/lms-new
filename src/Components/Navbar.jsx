/* eslint-disable no-unused-vars */
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUser, FaUser, FaShoppingBag, FaTimes, FaStar, FaSignOutAlt, FaRegHeart, FaBars } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import logo from "/webapps/lms_react/src/assets/Logo.png";
import { Link } from 'react-router-dom';
import OfferNavbar from "./OfferNavbar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const userMenuRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); 
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.trim().length > 0);
  };

  const handleSearchOptionClick = (type) => {
    console.log(`Searching for "${searchTerm}" in ${type}`);
    setShowDropdown(false);
  };
  return (
    <>
      <nav className="fixed left-0 top-0 w-full bg-white shadow-md pb-4 z-50 transition-all duration-300">

   <OfferNavbar/>

        <div className="container mx-auto flex items-center justify-between px-6 mt-2 relative ">
          
        <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="rak-logo" style={{ width: "132px", height: "47px" }} />
            </Link>            
         <div className="relative  mt-1">
         <div className="hidden md:flex rounded-xl border border-primaryBlue overflow-hidden lg:w-full w-[80%]">
         <input
          type="text"
          placeholder="Search ..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="lg:w-full w-[80%] outline-none bg-white text-sm px-4 py-2 "
        />
        <Link to="/searchresult"
          className="bg-primaryBlue hover:bg-[#007bbd] px-5 flex items-center justify-center"
        >
          <FiSearch className="text-white" size={18} />
        </Link>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-xl shadow-lg z-10 mt-1 text-sm">
        {["Course", "Category", "Instructor"].map((type) => (
          <div
            key={type}
            onClick={() => handleSearchOptionClick(type)}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Search {type} for "<span className="font-medium">{searchTerm.length > 30 ? searchTerm.slice(0, 30) + "..." : searchTerm}</span>"
          </div>
        ))}
                </div>
              )}
            </div>
          <div className="flex items-center gap-3 md:hidden ml-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center border-2 border-primaryBlue p-2 rounded-lg bg-primaryBlue text-white"
            >
              <FiSearch className="text-white " size={18} />
            </button>
            <button className="text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          {/* modal */}
          {isModalOpen && (
            <div className="fixed md:hidden inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 ">
              <div className="bg-white rounded-searchresultlg p-6 w-[90%] relative flex flex-col items-center">
                <button
                  className="absolute top-2 right-2 text-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>
                <h2 className="text-lg mb-1 font-semibold text-start">Search</h2>
                <p className="text-xs text-gray-500 mb-3">Type a keyword and select a type below.</p>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(e.target.value.trim().length > 0);
                  }}
                  placeholder=" Search..."
                  className="w-full border p-2 rounded mb-2"
                />
                {showDropdown && (
                <div className="border border-gray-300 rounded-md shadow text-sm mb-4">
                  {["Course", "Category", "Instructor"].map((type) => (
                    <div
                      key={type}
                      onClick={() => {
                        setIsModalOpen(false);
                        setShowDropdown(false);
                        navigate(`/searchresult`);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Search {type} for "<span className="font-medium">
                        {searchTerm.length > 30 ? searchTerm.slice(0, 30) + "..." : searchTerm}
                      </span>"
                    </div>
                  ))}
                </div>
              )}
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/searchresult`);
                    setIsModalOpen(false);
                  }}
                  className="w-1/3 mt-1 bg-primaryBlue text-white py-1 rounded-lg "
                >
                  <FiSearch className="inline-block mr-2" size={18} />
                  Search
                </button>
              </div>
            </div>
          )}

            <ul className={` absolute lg:static top-full left-0 w-full lg:w-fit lg:w-auto bg-white lg:flex space-y-4 lg:space-y-0 lg:space-x-6 text-black font-semibold p-4 lg:p-0 transition-all duration-300 ${menuOpen ? "block" : "hidden lg:flex"}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 lg:py-0 transition-colors duration-200 ${
                    isActive ? "text-[#0FB0ED]" : "text-black hover:text-[#0c95d3]"}`
                }
                                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen("");
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `block py-2 lg:py-0 transition-colors duration-200 ${
                    isActive ? "text-[#0FB0ED]" : "text-black hover:text-[#0c95d3]"}`
                }
                onClick={() => { setMenuOpen(false); setDropdownOpen(""); }}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/coursesForTeacher"
                className={({ isActive }) =>
                  `block py-2 lg:py-0 transition-colors duration-200 ${
                    isActive ? "text-[#0FB0ED]" : "text-black hover:text-[#0c95d3]"}`
                }
                onClick={() => { setMenuOpen(false); setDropdownOpen(""); }}
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `block py-2 lg:py-0 transition-colors duration-200 ${
                    isActive ? "text-[#0FB0ED]" : "text-black hover:text-[#0c95d3]"}`
                }
                onClick={() => { setMenuOpen(false); setDropdownOpen(""); }}
              >
                Contact Us
              </NavLink>
            </li>
            {/* <div className="flex flex-col gap-3 mt-4 md:hidden px-2 text-gray-700">
              <NavLink
                to="/wishlist"
                className="block py-2 font-semibold text-gray-700 hover:text-red-500 hover:underline hover:underline-offset-4"
              >
                <FaRegHeart className="inline-block mr-2" />
                Wishlist
              </NavLink>

              <NavLink
                to="/shoppingcart"
                className="block py-2 font-semibold text-gray-700 hover:text-primaryBlue hover:underline hover:underline-offset-4"
              >
                <FiShoppingCart className="inline-block mr-2" />
                Cartauto
              </NavLink>

              <NavLink
                to="/dashboard/profile"
                className="block py-2 font-semibold text-gray-700 hover:text-primaryGreen hover:underline hover:underline-offset-4"
              >
                <FaRegUser className="inline-block mr-2" />
                Profile
              </NavLink>
      
            </div> */}
             <div className=" items-center space-x-4 flex md:hidden">
            <Link to='/login'>
          <button className="flex items-center font-semibold text-black hover:text-[#5e8a34] ">
            <FaRegUser className="mr-2" />
            Log in
            </button></Link>
            <div className="h-4 border-l border-gray-500"></div>
            <Link to='/register'>
            <button className="font-semibold py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
              Sign up</button></Link>
          </div> 
          </ul>


          {/* login section */}
          <div className="lg:flex items-center space-x-4 hidden ">
            <Link to='/login'>
          <button className="flex items-center font-semibold text-black hover:text-[#5e8a34] ">
            <FaRegUser className="mr-2" />
            Log in
            </button></Link>
            <div className="h-4 border-l border-gray-500"></div>
            <Link to='/register'>
            <button className="font-semibold py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
              Sign up</button></Link>
          </div> 
          <div className="md:block hidden lg:hidden mt-2">
          <button className="text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        </div>
      </nav>
      <div className="mt-24"></div>
    </>
  );
};

export default Navbar;