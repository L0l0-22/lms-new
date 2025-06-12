import React, { useState } from 'react';

export default function EditCourseModal({ course, onClose, onSave }) {
  const [courseName, setCourseName] = useState(course?.name || '');
  const [description, setDescription] = useState(course?.description || '');
  const [price, setPrice] = useState(course?.price || '');
  const [coverImage, setCoverImage] = useState(course?.coverImage || null);

const handleSave = () => {
  const updatedCourse = {
    ...course,
    name: courseName,
    description,
    price,
    image: coverImage || course.image,
  };
  onSave(updatedCourse);
};

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setCoverImage(URL.createObjectURL(e.target.files[0]));
    }
  };
console.log("Cover image value:", course.image);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
      onClick={onClose} // Closes when clicking outside modal
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-xs md:max-w-2xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4">Edit Course</h2>

     {coverImage || course.image ? (
        <img
          src={coverImage || course.image}
          alt="Cover Preview"
          className="w-full h-32 md:h-48 object-cover rounded mb-4"
        />
      ) : (
        <div className="w-full h-32 md:h-48 bg-gray-100 flex items-center justify-center text-gray-400 rounded mb-4">
          No cover image selected
        </div>
      )}
        <label className="block font-medium mb-2 text-sm text-gray-700">
          Upload New Cover Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 w-full border rounded px-3 py-2 text-sm"
        />

        <label className="block font-medium mb-1 text-sm text-gray-700">Course Name</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Enter course name"
          className="mb-4 w-full border rounded px-3 py-2 text-sm"
        />

        <label className="block font-medium mb-1 text-sm text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description"
          className="mb-4 w-full border rounded px-3 py-2 text-sm h-14 resize-none"
        />

        <label className="block font-medium mb-1 text-sm text-gray-700">
          Price (EGP)
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="e.g. 500.00"
          className="mb-4 w-full border rounded px-3 py-2 text-sm"
          min={0}
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-primaryBlue hover:bg-[#0CA0D6] text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
