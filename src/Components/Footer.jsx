import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import google from "/webapps/lms_react/src/assets/google.svg";
import linkedin from "/webapps/lms_react/src/assets/linkedin.svg";
import facebook from "/webapps/lms_react/src/assets/facebook.svg";
import socialicon from "/webapps/lms_react/src/assets/social-footer.png";

export default function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="bg-[#7D888D] text-white mt-20">
      {/* Top Footer Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-center md:gap-0 text-center md:text-left">
          {/* About Company */}
          <div className="md:w-[50%]   mb-6 md:mb-0">
            <h1 className="text-4xl font-bold">LMS</h1>
            <p className="mt-3 text-lg font-light">
              Lorem Ipsum is simply dummy text of the <br />
              printing and typesetting industry.
            </p>
            <img
              src={socialicon}
              alt="Social Icons"
              className="mt-4 mx-auto md:mx-0"
            />
          </div>

          {/* Popular Courses */}
          <div className="md:w-[30%] mb-6 md:mb-0">
            <h6 className="text-lg font-semibold mb-2">POPULAR COURSES</h6>
            <p className="text-lg  font-light">
              Digital Ecosystem Infrastructure <br />
              Nutrition, Exercise and Sports <br />
              Leadership and Influence
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:w-[30%]">
            <h6 className="text-lg font-semibold mb-2">NEWSLETTER</h6>
            <form className="mt-2 flex flex-col items-center md:items-start">
              <input
                className="w-[270px] md:w-full h-9 rounded-md border border-gray-300 px-3 mb-4 text-black"
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
              />
              <button
                type="submit"
                className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className=" border-t border-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 justify-center text-center md:text-left space-y-2 md:space-y-0">
          <p className="text-sm font-semibold ">
            © 2024 LMS Education. All Rights Reserved.
          </p>
          <p className="text-sm font-semibold">Terms of Conditions</p>
          <p className="text-sm font-semibold">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
