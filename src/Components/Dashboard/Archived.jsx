import React, { useState } from 'react';
import img1 from "/webapps/lms_react/src/assets/react.jpg";
import img2 from '/webapps/lms_react/src/assets/react+ts.jpg';
import img3 from "/webapps/lms_react/src/assets/next.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

export default function Archived() {
  const archivedCourses = [
    {
      id: 1,
      name: "Pro Frontend Engineer ReactJS + TypeScript",
      by: "Muhammad Naga (Codeawy)",
      image: img1,
      rating: 4.5,
      progress: 100,
      completed: true,
    },
    {
      id: 2,
      name: "Intermediate Frontend Developer Bootcamp",
      by: "Jane Doe",
      image: img2,
      rating: 4,
      progress: 60,
      completed: false,
    },
    {
      id: 3,
      name: "Advanced TypeScript with React",
      by: "John Smith",
      image: img3,
      rating: 5,
      progress: 100,
      completed: true,
    },
  
  ];
  if (archivedCourses.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-20">
        <p>No archived courses yet.</p>
        <p className="text-sm mt-1">Completed or removed courses will appear here.</p>
      </div>
    );
  }
  return (
      <div className="flex flex-wrap md:flex-row flex-col gap-3">
          {archivedCourses.map((course) => {
            const fullStars = Math.floor(course.rating);
            const hasHalfStar = course.rating - fullStars >= 0.5;
            const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

            return (
            <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 bg-white rounded shadow relative ">
               <img src={course.image} alt={course.name} className="w-full h-40 object-cover rounded" />
                <div className={`absolute top-3 right-3 px-2 py-1  text-xs text-white ${course.completed ? 'bg-teal-500' : 'bg-yellow-500'}`}>
                  {course.completed ? "Completed" : "In Progress"}
                </div>
                <h2 className="mt-3 text-sm font-semibold truncate">{course.name}</h2>
                <p className="text-xs text-gray-600">{course.by}</p>

                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-teal-500 h-1 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-1 text-xs text-gray-500">
                    <span>{course.progress}% Complete</span>
                    <div className="flex items-center">
                      {[...Array(fullStars)].map((_, i) => <AiFillStar key={i} className="text-yellow-500 text-xs" />)}
                      {hasHalfStar && <BsStarHalf className="text-yellow-500 text-xs" />}
                      {[...Array(emptyStars)].map((_, i) => <AiOutlineStar key={i} className="text-gray-300 text-xs" />)}
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <button className="text-blue-600 hover:underline">Restore</button>
                    {course.completed && (
                      <button className="text-green-600 hover:underline">Download Certificate</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
  );
}
