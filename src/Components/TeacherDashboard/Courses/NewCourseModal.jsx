import React, { useState } from 'react';
export default function NewCourseModal({ onClose, onAddCourse }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setCoverImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleCreate = () => {
    const newCourse = {
      name,
      description,
      price: Number(price),
      image: coverImage,
    };
    onAddCourse(newCourse);  // This triggers onViewCourse inside Courses
    onClose();               // Close modal
  };


  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xs md:max-w-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">Create New Course</h2>

        {/* Cover Image */}
        {coverImage ? (
          <img
            src={coverImage}
            alt="Preview"
            className="w-full h-32 md:h-48 object-cover rounded mb-4"
          />
        ) : (
          <div className="w-full h-32 md:h-48 bg-gray-100 text-gray-400 flex items-center justify-center rounded mb-4">
            No cover selected
          </div>
        )}

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Cover Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 w-full border rounded px-3 py-2 text-sm"
        />

        {/* Name */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Course Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter course name"
          className="mb-4 w-full border rounded px-3 py-2 text-sm"
        />

        {/* Description */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Brief course description"
          className="mb-4 w-full border rounded px-3 py-2 text-sm resize-none h-20"
        />

        {/* Price */}
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price (EGP)
        </label>
        <div className="relative mb-4">
          <input
            type="number"
            min={0}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 499"
            className="w-full border rounded px-3 py-2 text-sm pr-12"
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 text-xs">EGP</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-primaryBlue hover:bg-[#0CA0D6] text-white rounded"
          >
            Create Course
          </button>
        </div>
      </div>
    </div>
  );
}
