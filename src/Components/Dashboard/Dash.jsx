import React from 'react'
import { FaBook, FaList, FaHeart, FaArchive, FaToolbox, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

export default function Dash() {
    return (
            <div className="flex flex-col min-h-screen">
            <div className="pt-9 border-b shadow-lg border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#53BA7F] to-[#1FB0C7]">
                    <h1 className="text-5xl text-white font-sans ml-5 mb-4 tracking-tight">My Learning</h1>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 -mb-px text-base font-semibold text-center" role="tablist">
                        <li className="me-2" role="presentation">
                            <NavLink
                                to="/dashboard/coursesForTeacher"
                                // to="/dashboard/courses"
                                className={({ isActive }) =>
                                    `inline-flex items-center p-4 rounded-t-lg transition-all duration-300 
                                    ${isActive ? ' text-[#0288D1]' : 'text-white'}`
                                }
                            >
                                <FaBook className="mr-2"  />
                                My Courses
                            </NavLink>
                        </li>
                        <li className="me-2" role="presentation">
                            <NavLink
                                to="/dashboard/wishlist"
                                className={({ isActive }) =>
                                    `inline-flex items-center p-4 rounded-t-lg transition-all duration-300 
                                    ${isActive ? ' text-[#0288D1]' : 'text-white'}`
                                }
                            >
                                <FaHeart className="mr-2" />
                                Wishlists
                            </NavLink>
                        </li>
                        <li className="me-2" role="presentation">
                            <NavLink
                                to="/dashboard/archived"
                                className={({ isActive }) =>
                                    `inline-flex items-center p-4 rounded-t-lg transition-all duration-300 
                                    ${isActive ? ' text-[#0288D1]' : 'text-white'}`
                                }
                            >
                                <FaArchive className="mr-2" />
                                Archived
                            </NavLink>
                        </li>
                        <li className="me-2" role="presentation">
                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive }) =>
                                    `inline-flex items-center p-4 rounded-t-lg transition-all duration-300 
                                    ${isActive ? ' text-[#0288D1]' : 'text-white'}`
                                }
                            >
                                <FaUser className="mr-2" />
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="mt-4 p-4">
                    <Outlet />
                </div>


            </div>
    );
}
