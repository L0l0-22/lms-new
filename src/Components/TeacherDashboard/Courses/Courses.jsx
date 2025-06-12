import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import img1 from "/webapps/lms_react/src/assets/react.jpg";
import img2 from "/webapps/lms_react/src/assets/react+ts.jpg";
import img3 from "/webapps/lms_react/src/assets/next.jpg";
import EditCourseModal from './EditCourseModal';
import NewCourseModal from './NewCourseModal';
import { IoMdClose } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';


export default function Courses({ onViewCourse }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [courseToEdit, setCourseToEdit] = useState(null); // <-- new

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const handleCourseClick = (course) => {
    onViewCourse(course); // this sets selectedCourse inside TeacherDash
  };
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Pro Frontend Engineer ReactJS + TypeScript + Redux - بالعربى",
      description: "Master frontend engineering with real-world projects using React and TypeScript.",
      image: img1,
      by: "Muhammad Naga (Codeawy)",
      price: 499,
    },
    {
      id: 2,
      name: "Advanced React: Design System, Design Patterns, Performance",
      description: "Deep dive into React architecture, reusable design systems, and performance tips.",
      image: img2,
      by: "Muhammad Naga (Codeawy)",
      price: 799,
    },
    {
      id: 3,
      name: "Next.js 15 & React - The Complete Guide",
      description: "Learn server-side rendering, API routes, and the newest features in Next.js 15.",
      image: img3,
      by: "Muhammad Naga (Codeawy)",
      price: 899,
    },
  ]);
const handleAddCourse = (newCourse) => {
  const fullCourse = {
    ...newCourse,
    id: courses.length + 1,
    by: "Muhammad Naga (Codeawy)",
  };
  setCourses((prev) => [...prev, fullCourse]);
  onViewCourse(fullCourse); // <-- this line navigates to details
};
const handleDeleteCourse = () => {
  setCourses((prev) => prev.filter(course => course.id !== courseToDelete.id));
  setDeleteModalOpen(false);
  setCourseToDelete(null);
};


  return (
    <div className="p-6 md:p-10 mt-12 md:mt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800">Your Courses</h2>
        <button
          onClick={() => setNewModalOpen(true)}
          className="bg-primaryBlue text-xs px-3 py-1 md:px-4 md:py-2 md:text-base text-white rounded-lg hover:bg-[#0CA0D6]"
        >
          + New Course
        </button>

      {newModalOpen && (
        <NewCourseModal
          onClose={() => setNewModalOpen(false)}
          onAddCourse={handleAddCourse}
        />
      )}
      </div>
      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => handleCourseClick(course)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition relative p-4 flex flex-col md:flex-row gap-4 cursor-pointer"
          >
            <div className="w-full md:w-48">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-32 md:h-32 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-[#0A2E40]">
                  {course.name}
                </h3>
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 👈 prevent card click
                      toggleDropdown(course.id);
                    }}
                    className="text-gray-600 hover:bg-sky-100 p-1.5 rounded-md"
                  >
                    <BsThreeDotsVertical size={18} />
                  </button>
                  {openDropdown === course.id && (
                    <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md z-20 w-40">
                      <ul className="text-sm text-gray-700">
                        <li
                        onClick={(e) => {
                          e.stopPropagation(); // 👈 important
                          setOpenDropdown(null);
                          onViewCourse(course); // 👈 send selected course to parent
                        }}
                        className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                      >
                        View Details
                      </li>

                        <li
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(null);
                            setCourseToEdit(course);   // Set selected course
                            setEditModalOpen(true);    // Open modal
                          }}

                          className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                        >
                          Edit Course
                        </li>
                        <li
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenDropdown(null);
                            setCourseToDelete(course);
                            setDeleteModalOpen(true);
                          }}
                          className="px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
                        >
                          Delete Course
                        </li>

                      </ul>
                    </div>
                  )}
                </div>
                {editModalOpen && courseToEdit && (
                    <EditCourseModal
                      course={courseToEdit}
                      onClose={() => {
                        setEditModalOpen(false);
                        setCourseToEdit(null);
                      }}
                      onSave={(updatedCourse) => {
                        // update course in state
                        setCourses(prev => prev.map(c => c.id === updatedCourse.id ? updatedCourse : c));
                        setEditModalOpen(false);
                        setCourseToEdit(null);
                      }}
                    />
                  )}
                 {deleteModalOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
                    onClick={() => setDeleteModalOpen(false)}
                  >
                    <div
                      className="relative p-4 w-full max-w-md"
                      onClick={(e) => e.stopPropagation()} // 👈 stop click from bubbling to parent
                    >
                        <div className="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                          <button
                            type="button"
                            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            onClick={() => setDeleteModalOpen(false)}
                          >
                            <IoMdClose size={24} />
                            <span className="sr-only">Close modal</span>
                          </button>
                          <div className="flex items-center justify-center my-5">
                            <RiDeleteBin6Fill className="text-gray-300" size={45} />
                          </div>
                          <p className="mb-4 text-gray-500">
                            Are you sure you want to delete <strong>{courseToDelete?.name}</strong>?
                          </p>
                          <div className="flex justify-center items-center space-x-4">
                            <button
                              onClick={() => setDeleteModalOpen(false)}
                              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900"
                            >
                              No, cancel
                            </button>
                            <button
                              onClick={handleDeleteCourse}
                              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                            >
                              Yes, I'm sure
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}


              </div>
              <p className="text-sm text-gray-700 mt-1">{course.description}</p>
             <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-500">📅 Last updated: <span className="font-medium text-primaryBlue">June 2025</span></p>
                <p className="text-sm text-gray-500">
                    💵 Price: <span className="font-medium text-primaryBlue">{course.price} EGP</span>
                  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
