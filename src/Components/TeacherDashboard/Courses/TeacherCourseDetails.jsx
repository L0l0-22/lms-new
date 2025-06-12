import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { HiOutlineMinus } from 'react-icons/hi';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import AddChapterModal from './modals/AddChapterModal';
import EditChapterModal from './modals/EditChapterModal';
import DeleteChapterModal from './modals/DeleteChapterModal';
import DeleteLessonModal from './modals/DeleteLessonModal';
import AddLessonModal from './modals/AddLessonModal';
import EditLessonModal from './modals/EditLessonModal';

export default function TeacherCourseDetails({ course, onBack }) {
  const [chapters, setChapters] = useState(course.chapters || []);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [lessonModal, setLessonModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [deletingIndex, setDeletingIndex] = useState(null);
  const [openChapterIndex, setOpenChapterIndex] = useState(null);
  const [editLessonModal, setEditLessonModal] = useState(false);
  const [editedLessonName, setEditedLessonName] = useState("");
  const [previewVideoURL, setPreviewVideoURL] = useState("");
  const [newVideoFile, setNewVideoFile] = useState(null);
  const [deleteLessonModal, setDeleteLessonModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const handleEditLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setEditedLessonName(lesson.title);
    setEditLessonModal(true);
  };
  const handleEditLessonSubmit = () => {
    if (!selectedLesson) return;

    const updatedChapters = chapters.map((chapter, chapterIndex) => {
      if (chapterIndex === openChapterIndex) {
        const updatedLessons = chapter.lessons.map((lesson) => {
          if (lesson === selectedLesson) {
            return {
              ...lesson,
              title: editedLessonName,
              video: newVideoFile || lesson.video,
            };
          }
          return lesson;
        });

        return {
          ...chapter,
          lessons: updatedLessons,
        };
      }
      return chapter;
    });

    setChapters(updatedChapters);
    setEditLessonModal(false);
    setSelectedLesson(null);
    setEditedLessonName('');
    setNewVideoFile(null);
  };

  const handleDeleteLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setDeleteLessonModal(true);
  };
  const handleDeleteLessonConfirm = () => {
    if (!selectedLesson) return;

    const updatedChapters = chapters.map((chapter, chapterIndex) => {
      if (chapterIndex === openChapterIndex) {
        const filteredLessons = chapter.lessons.filter(
          (lesson) => lesson !== selectedLesson
        );
        return { ...chapter, lessons: filteredLessons };
      }
      return chapter;
    });

    setChapters(updatedChapters);
    setSelectedLesson(null);
    setDeleteLessonModal(false);
  };
  const toggleChapter = (index) => {
  setOpenChapterIndex(prevIndex => (prevIndex === index ? null : index));
};
  const [chapterData, setChapterData] = useState({
    title: '',
    description: '',
  });
  const [lessonData, setLessonData] = useState({ title: '', video: null });
  const [selectedChapterIndex, setSelectedChapterIndex] = useState(null);
  const handleAddChapter = () => {
  if (!chapterData.title || !chapterData.description) return;

  const newChapter = {
    ...chapterData,
    lessons: [],
  };

  setChapters([...chapters, newChapter]);
  setChapterData({ title: '', description: '' });
  setShowAddModal(false);
  };
  const handleAddLesson = () => {
  if (!lessonData.title || !lessonData.video) return;

  const updatedChapters = [...chapters];
  const currentChapter = updatedChapters[selectedChapterIndex];

  const newLesson = {
    title: lessonData.title,
    video: lessonData.video,
  };

  if (!currentChapter.lessons) {
    currentChapter.lessons = [];
  }

  currentChapter.lessons.push(newLesson);
  updatedChapters[selectedChapterIndex] = currentChapter;

  setChapters(updatedChapters);
  setLessonData({ title: '', video: null });
  setLessonModal(false);
};
  const handleEditChapter = () => {
    const updated = [...chapters];
    updated[editingIndex] = chapterData;
    setChapters(updated);
    setChapterData({ title: '', description: ''});
    setEditingIndex(null);
    setShowEditModal(false);
  };
  const handleDeleteChapter = () => {
    const updatedChapters = chapters.filter((_, index) => index !== deletingIndex);
    setChapters(updatedChapters);
    setShowDeleteModal(false);
    setDeletingIndex(null);
  };
  const openEditModal = (index) => {
    setEditingIndex(index);
    setChapterData(chapters[index]);
    setShowEditModal(true);
  };
  const openDeleteModal = (index) => {
    setDeletingIndex(index);
    setShowDeleteModal(true);
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow relative mt-12 md:mt-5">
      <button
        onClick={onBack}
        className="mb-4 text-primaryBlue underline hover:text-[#0CA0D6]"
      >
        ← Back to Courses
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        {course.image && (
          <img
            src={course.image}
            alt="Course vedio"
            className="w-full md:w-1/3 h-48 object-cover rounded-xl"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
          <p className="font-medium text-gray-700 mt-1">{course.description}</p>
          <p className="mt-2 text-gray-500">Instructor: {course.by}</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-500">📅 Last updated: <span className="font-medium text-primaryBlue">June 2025</span></p>
            <p className="text-sm text-gray-500">
              💵 Price: <span className="font-medium text-primaryBlue">{course.price} EGP</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">Chapters</h3>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-[#0CA0D6]"
          >
            + Add Chapter
          </button>
        </div>
      <ul className="space-y-6">
        {chapters.map((chapter, index) => (
          <li key={index} className="bg-white p-5 rounded-2xl shadow-sm border">
            {/* Accordion Header */}
          <div className="flex flex-wrap items-center bg-[#e4edfd] p-4 rounded-lg gap-2">
            <button
              onClick={() => toggleChapter(index)}
              className="transition-colors font-semibold text-gray-800 text-sm md:text-base text-start flex-1"
            >
              Chapter {index + 1}: {chapter.title}
            </button>
            <span className="text-xl">
              {openChapterIndex === index ? <HiOutlineMinus /> : <IoMdAdd />}
            </span>
          </div>

            {/* Accordion Content */}
            {openChapterIndex === index && (
              <div className="mt-4 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 w-full">
                    {chapter.video && (
                      <video
                        src={URL.createObjectURL(chapter.video)}
                        controls
                        className="w-64 h-36 rounded-lg object-cover shadow"
                      />
                    )}
                    <div className="space-y-2 lg:max-w-3xl">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{chapter.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEditModal(index)}
                      className="bg-primaryBlue hover:bg-[#0CA0D6] text-white px-2 rounded-md transition"
                    >
                      <CiEdit size={21} />
                    </button>
                    <button
                      onClick={() => openDeleteModal(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 rounded-md transition"
                    >
                      <MdDelete size={21} />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedChapterIndex(index);
                        setLessonModal(true);
                      }}
                      className="bg-primaryGreen hover:bg-[#76c13f] text-white py-2 w-32 text-sm font-medium rounded-md transition"
                    >
                      Add Lesson
                    </button>
                  </div>
                </div>
                  {chapter.lessons?.length > 0 && (
                    <div className="mt-5">
                      <h4 className="text-md font-semibold text-gray-700 mb-3">Lessons:</h4>
                      <ul className="space-y-3">
                        {chapter.lessons.map((lesson, idx) => (
                          <li
                            key={idx}
                            className="border shadow hover:shadow-md p-3 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                          >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                              <video
                                src={URL.createObjectURL(lesson.video)}
                                controls
                                className="w-full sm:w-32 h-20 object-cover rounded shadow-sm"
                              />
                              <div className="space-y-1">
                                <p className="font-medium text-gray-800">Lesson : {idx + 1}</p>
                                <p className="text-gray-700 text-sm">{lesson.title}</p>
                                <p className="text-gray-500 text-xs">30:00 min</p>
                              </div>
                            </div>
                            <div className="flex gap-4 justify-end">
                              <button
                                onClick={() => handleEditLessonClick(lesson)}
                                className="text-primaryBlue hover:text-[#0CA0D6] hover:underline rounded-md transition"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteLessonClick(lesson)}
                                className="text-red-500 hover:text-red-600 hover:underline rounded-md transition"
                              >
                                Delete
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            )}
          </li>
        ))}
      </ul>
      </div>
      {/* Add Chapter Modal */}
      {showAddModal && (
        <AddChapterModal
          chapterData={chapterData}
          setChapterData={setChapterData}
          handleAddChapter={handleAddChapter}
          setShowAddModal={setShowAddModal}
        />
      )}
      {/* Edit Chapter Modal */}
     {showEditModal && (
        <EditChapterModal
          chapterData={chapterData}
          setChapterData={setChapterData}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditChapter}
        />
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteChapterModal
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteChapter}
        />
      )}
      {/* add lesson */}
     {lessonModal && (
        <AddLessonModal
          lessonData={lessonData}
          setLessonData={setLessonData}
          setLessonModal={setLessonModal}
          handleAddLesson={handleAddLesson}
        />
      )}
      {/* edit lesson */}
      {editLessonModal && selectedLesson && (
        <EditLessonModal
          selectedLesson={selectedLesson}
          previewVideoURL={previewVideoURL}
          setPreviewVideoURL={setPreviewVideoURL}
          setEditLessonModal={setEditLessonModal}
          editedLessonName={editedLessonName}
          setEditedLessonName={setEditedLessonName}
          setNewVideoFile={setNewVideoFile}
          handleEditLessonSubmit={handleEditLessonSubmit}
        />
      )}
      {/* delete lesson */}
      {deleteLessonModal && selectedLesson && (
         <DeleteLessonModal
            onClose={() => setDeleteLessonModal(false)}
            onDelete={handleDeleteLessonConfirm}
          />
      )}
    </div>
  );
}