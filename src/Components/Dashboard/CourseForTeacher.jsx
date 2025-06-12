import React from "react";
import teacher from "/webapps/lms_react/src/assets/teacher.jpg";
// import img1 from "/webapps/lms_react/src/assets/course.jpeg";
import img1 from "/webapps/lms_react/src/assets/react.jpg";
import img2 from "/webapps/lms_react/src/assets/react+ts.jpg";
import img3 from "/webapps/lms_react/src/assets/next.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CourseForTeacher() {
  const courses = [
    {
      name: "Pro Frontend Engineer ReactJS + TypeScript + Redux - بالعربى",
      enrolled: 120,
      rating: 4.5,
      lastUpdated: "January 2025",
      earnings: "$800",
      image: img1,
      rate: 200,
    },
    {
      name: "Advanced React: Design System, Design Patterns, Performance",
      enrolled: 85,
      rating: 3.6,
      lastUpdated: "March 2025",
      earnings: "$1200",
      image: img2,
      rate: 200,
    },
    {
      name: "Next.js 15 & React - The Complete Guide",
      enrolled: 200,
      rating: 5,
      lastUpdated: "February 2025",
      earnings: "$1500",
      image: img3,
      rate: 200,
    },
  ];
  return (
    <div className="w-full p-6 bg-gray-50">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <img
            src={teacher}
            alt="Teacher Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
            <p className="text-sm text-gray-600">teacher@example.com</p>
          </div>
        </div>
        <div>
          <Link
            to="/teacherdashboard"
            className="p-3 bg-gradient-to-r from-[#53BA7F] to-[#1FB0C7] text-white font-semibold rounded-md transition-all duration-300 hover:from-[#429a6a] hover:to-[#1898ac]"
          >
              Go To My Dashboard
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row flex-col gap-3">
        {courses.map((course, index) => {
          const fullStars = Math.floor(course.rating);
          const hasHalfStar = course.rating - fullStars >= 0.5;
          const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
          return (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-white rounded shadow relative"
            >
              <Link to="/teacherdashboard">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-40 object-cover rounded"
              />
              </Link>
              
              <h3 className="mt-3 text-sm font-semibold text-gray-800 truncate">
                {course.name}
              </h3>
              <p className="text-xs text-gray-600">Enrolled: {course.enrolled} students</p>
              <p className="text-xs text-gray-600">Last updated: {course.lastUpdated}</p>

              <div className="flex items-center mt-1">
                <p className="text-yellow-600 mr-2 font-bold text-xs">{course.rating}</p>
                {[...Array(fullStars)].map((_, i) => (
                  <AiFillStar key={`full-${i}`} className="text-yellow-500 text-xs" />
                ))}
                {hasHalfStar && <BsStarHalf className="text-yellow-500 text-xs" />}
                {[...Array(emptyStars)].map((_, i) => (
                  <AiOutlineStar key={`empty-${i}`} className="text-gray-300 text-xs" />
                ))}
                <p className="text-gray-500 mx-3 text-xs">({course.rate})</p>
              </div>
              <p className="text-xs text-gray-600 mt-1">Earnings: {course.earnings}</p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
