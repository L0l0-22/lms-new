import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineVideoCall } from 'react-icons/md';
import { RiImageAddLine } from 'react-icons/ri';

export default function UploadCourse() {
  return (
    <div className="container mx-auto w-[90%] mt-40 mb-32 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Good Morning, <span className="text-primaryBlue">Mr. Ahmed 😊</span>
        </h1>
        <button className="flex items-center  px-4 py-2 bg-primaryBlue text-white rounded-lg mt-4 md:mt-0 hover:bg-[#007bbd] transition duration-300">
          <MdOutlineVideoCall size={24} className="mr-2" />
          New Course
        </button>
      </div>
      <h2 className="text-2xl font-semibold ">Upload New Course</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Course Title</label>
            <input
              type="text"
              placeholder="Enter course title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Description</label>
            <textarea
              rows="3"
              placeholder="Write a short description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
            />
          </div>
        </div>

        <div className="space-y-11">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Language</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen">
                <option value="">Please Select</option>
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Skill Level</label>
              <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen">
                <option value="">Please Select</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div
            className="flex items-center border-2 border-dashed border-primaryGreen rounded-lg p-4 cursor-pointer hover:bg-green-50"
            onClick={() => document.getElementById('cover').click()}
          >
            <input
              id="cover"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <RiImageAddLine size={40} className="text-primaryGreen mr-4" />
            <div className="text-primaryGreen space-y-1">
              <p className="font-medium">Upload Cover Image (19:6)</p>
              <p className="text-sm text-gray-600">Drop your file here or browse</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold ">Course Content</h2>
        <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start gap-4 w-full md:space-y-5">
            <div className="w-full md:w-1/2">
                <label className="block text-sm text-gray-600 mb-1">Chapter 1</label>
                <input
                type="text"
                placeholder="Enter chapter title"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                />
            </div>
            <div className="w-full md:w-1/2">
                <p className="text-sm text-gray-500 mb-1">Uploading...</p>
                <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-primaryBlue h-4 rounded-full" style={{ width: '45%' }} />
                </div>
            </div>
            </div>
        <div className="flex flex-col md:flex-row items-start gap-4 w-full md:space-y-5">
        <div className="w-full md:w-1/2">
            <label className="block text-sm text-gray-600 mb-1">Chapter 2</label>
            <input
            type="text"
            placeholder="Enter chapter title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
            />
        </div>
        <div className='flex justify-center items-center mx-auto mb-4'>
        <div
            className=" justify-center flex items-center border-2 border-dashed border-primaryGreen rounded-lg py-2 px-9 cursor-pointer hover:bg-green-50 py-2 px-5 cursor-pointer"
            onClick={() => document.getElementById('cover').click()}
          >
            <input
              id="cover"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <MdOutlineVideoCall size={34} className="text-primaryGreen mr-4" />
            <div className="text-primaryGreen space-y-1">
              <p className="font-medium">Upload Chapter</p>
            </div>
          </div>
        </div>
       
        </div>
        </div>

        <button className="flex items-center px-4 py-2 bg-primaryBlue hover:bg-[#007bbd] transition duration-300 text-white rounded-lg">
          <IoMdAdd size={24} className="mr-2" />
          Add Chapter
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Other Information</h2>

        <div className="flex flex-col lg:flex-row gap-4 items-end">
        <div className="w-full lg:w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Price</label>
            <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">$</span>
            <input
                type="number"
                placeholder="00000"
                className="w-full pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            />
            </div>
        </div>
        <div className="w-full lg:w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Category</label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen">
            <option value="">Please Select</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            </select>
        </div>
        <div className="w-full lg:w-1/4">
            <label className="block text-sm text-gray-600 mb-1">Type</label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen">
            <option value="">Please Select</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
            </select>
        </div>
        <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
            <button className="w-full bg-primaryBlue text-white text-lg font-semibold px-6 py-2 rounded-md hover:bg-[#007bbd] transition duration-300">
            Submit
            </button>
        </div>
        </div>

</div>

    </div>
  );
}