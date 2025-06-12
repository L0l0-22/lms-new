import React, { useState } from "react";
import user from "/webapps/lms_react/src/assets/user.png"; 
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function Profile() {
  const [userInfo, setUserInfo] = useState({
    firstName: "Mark",
    lastName: "Aziz",
    preferredLanguage: "English",
    firstAccess: "Sunday, 3 July 2023, 12:24 AM",
    lastAccess: "Sunday, 27 April 2025, 10:22 AM",
    email: "Mark.LMS@gmail.com",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState("Profile Information"); 

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-[80%] mx-auto flex flex-col md:flex-row border border-gray-300 rounded-md m-2 shadow-lg">
      <div className="w-full md:w-72 flex flex-col items-center space-y-6 md:border-r md:border-gray-300 pt-14 ">
      <div className="relative w-40 h-40">
      <img
        src={user}
        alt="User"
        className="rounded-full w-full h-full object-cover"
      />
      <button
        className="absolute -bottom-2 right-12 bg-blue-200 p-1 rounded-full shadow-md hover:bg-gray-100"
        title="Edit Image"
      >
        <FiEdit2 size={16} className="text-blue-500" />
      </button>
      <button
        className="absolute -bottom-2 right-20 bg-red-200 p-1 rounded-full shadow-md hover:bg-gray-100"
        title="Delete Image"
      >
        <FiTrash2 size={17}  className="text-red-500" />
      </button>
    </div>

        <h4 className="font-semibold">MARK</h4>
        <div className="mt-8 w-full">
          <ul className="space-y-4">
            <li
              onClick={() => handleSectionClick("Profile Information")}
              className={`font-semibold hover:bg-blue-50 py-2 pl-12 cursor-pointer ${activeSection === "Profile Information" ? "bg-blue-50 text-primaryBlue " : "text-gray-800 "}`}
            >
              Profile Information
            </li>
            <li
              onClick={() => handleSectionClick("Subscriptions")}
              className={`font-semibold hover:bg-blue-50 py-2 pl-12 cursor-pointer ${activeSection === "Subscriptions" ? "bg-blue-50 text-primaryBlue " : "text-gray-800 "}`}
            >
              Subscriptions
            </li>
            <li
              onClick={() => handleSectionClick("Privacy")}
              className={`font-semibold hover:bg-blue-50 py-2 pl-12 cursor-pointer ${activeSection === "Privacy" ? "bg-blue-50 text-primaryBlue " : "text-gray-800 "}`}
            >
              Privacy
            </li>
            <li
              onClick={() => handleSectionClick("Close account")}
              className={`font-semibold hover:bg-blue-50 py-2 pl-12 cursor-pointer ${activeSection === "Close account" ? "bg-blue-50 text-primaryBlue " : "text-gray-800 "}`}
            >
              Close account
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-[#1FB0C7] mb-6 border-b border-gray-300 p-2 text-center">
            {activeSection}
          </h1>
            {activeSection === "Profile Information" && (
            <div className="space-y-4 mx-auto w-[85%] ">
              {[
                { label: "First Name", field: "firstName" },
                { label: "Last Name", field: "lastName" },
                { label: "Email Address", field: "email" },
                { label: "Preferred Language", field: "preferredLanguage" },
                { label: "First Access to Site", field: "firstAccess" },
                { label: "Last Access to Site", field: "lastAccess" },
              ].map(({ label, field }) => (
                <div key={field}>
                  <p className="text-xl font-semibold text-gray-800">{label}</p>
                  {isEditing && field !== "firstAccess" && field !== "lastAccess" ? (
                    <input
                      type="text"
                      name={field}
                      value={userInfo[field]}
                      onChange={handleChange}
                      className="mt-1 text-lg text-gray-700 bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                  ) : (
                    <p className="text-lg text-gray-600">{userInfo[field]}</p>
                  )}
                </div>
              ))}
            </div>
          )}

            {activeSection === "Subscriptions" && (
                <div className="space-y-6 mx-auto w-[85%]">
                  <h2 className="text-xl font-semibold text-gray-800">Your Subscriptions</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg text-gray-600">Basic Plan</p>
                      <span className="text-gray-500">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg text-gray-600">Premium Plan</p>
                      <span className="text-gray-500">Expires in 3 months</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-lg text-gray-600">VIP Plan</p>
                      <span className="text-gray-500">Not Active</span>
                    </div>
                  </div>
                </div>
              )}
                    {activeSection === "Privacy" && (
              <div className="space-y-6 mx-auto w-[85%]">
                <h2 className="text-xl font-semibold text-gray-800">Privacy Settings</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-gray-600">Two-Factor Authentication</p>
                    <span className="text-gray-500">Enabled</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-gray-600">Email Notifications</p>
                    <span className="text-gray-500">Enabled</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg text-gray-600">Profile Visibility</p>
                    <span className="text-gray-500">Public</span>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "Close account" && (
              <div className="space-y-6 mx-auto w-[85%]">
                <h2 className="text-xl font-semibold text-gray-800">Close Your Account</h2>
                <p className="text-lg text-gray-600">
                  Are you sure you want to close your account? This action is permanent and cannot be undone.
                </p>
                <div className="flex justify-end">
                  <button
                    className="py-2 px-8 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition duration-300 ease-in-out"
                  >
                    Close Account
                  </button>
                </div>
              </div>
            )}


          {/* Edit */}
          {activeSection === "Profile Information" && (
            <div className="flex justify-end relative bottom-5 right-3">
              <button
                onClick={handleEditToggle}
                className="py-2 px-8 rounded-lg bg-[#1FB0C7] hover:bg-blue-500 text-white font-medium transition duration-300 ease-in-out"
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
