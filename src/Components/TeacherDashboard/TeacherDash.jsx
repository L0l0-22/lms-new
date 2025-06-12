import React, { useEffect, useState } from 'react';
import {
  MdOutlineDashboardCustomize,
  MdOutlineClass,
  MdOutlineAssessment,
  MdOutlinePeopleAlt,
  MdOutlineBook,
  MdOutlineCalendarToday,
  MdMenu,
  MdQuiz
} from 'react-icons/md';
import teacher2 from "/webapps/lms_react/src/assets/teacher.jpg";
import Dashboard from './Dahboard';
import { Link } from 'react-router-dom';
import logo from "/webapps/lms_react/src/assets/Logo.png";
import Courses from './Courses/Courses';
import TeacherCourseDetails from './Courses/TeacherCourseDetails';
import EditCourseModal from './Courses/EditCourseModal';
import Assesments from './Assesments/Assesments';
import QuizDashboard from './Quizzes/QuizDashboard';

export default function TeacherDash() {
  const [selectedPage, setSelectedPage] = useState(() => {
    return localStorage.getItem('selectedPage') || 'Dashboard';
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null); // <== add this
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null); // course to edit
  useEffect(() => {
    localStorage.setItem('selectedPage', selectedPage);
  }, [selectedPage]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className={`
          ${sidebarOpen ? 'block' : 'hidden'} 
          fixed top-0 left-0 z-40 h-full w-64 bg-[#0A2E40] text-white shadow-lg p-6 
          lg:static lg:block lg:min-h-screen
        `}
      >
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex items-center space-x-4 mt-6">
          <img
            src={teacher2}
            alt="Teacher Profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-white"
          />
          <div>
            <h2 className="text-lg font-bold">John Doe</h2>
            <p className="text-sm text-gray-300">Instructor</p>
          </div>
        </div>

        <ul className="space-y-2 mt-10 font-medium text-sm">
          {[
            { label: 'Dashboard', icon: <MdOutlineDashboardCustomize /> },
            { label: 'Course', icon: <MdOutlineBook /> },
            { label: 'Assessments', icon: <MdOutlineAssessment /> },
            { label: 'Quizzes', icon: <MdQuiz /> },
            { label: 'Students', icon: <MdOutlinePeopleAlt /> },
            { label: 'Classes', icon: <MdOutlineClass /> },
            { label: 'Calendar', icon: <MdOutlineCalendarToday /> },
          ].map((item) => (
            <li
              key={item.label}
              onClick={() => setSelectedPage(item.label)}
              className={`flex items-center p-2 rounded-md transition cursor-pointer ${
                selectedPage === item.label ? 'bg-primaryBlue text-white' : 'text-gray-300 hover:bg-white/10'
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </li>
          ))}
        </ul>

        <Link to="/uploadCourse">
          <button
            className="mt-10 bg-primaryBlue hover:bg-[#0CA0D6] text-white w-full py-2 rounded-lg font-medium transition"
          >
            + New Upload
          </button>
        </Link>
        
      </aside>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#0A2E40] text-white p-2 rounded-md"
      >
        <MdMenu size={24} />
      </button>
      {/* Main Content */}
      <main className="flex-1 pb-8 px-8 pt-4 h-screen overflow-y-scroll">
        {selectedPage === 'Dashboard' && (
          <Dashboard/>
        )}
        {selectedPage === 'Course' && !selectedCourse && (
          <Courses
            onViewCourse={(course) => setSelectedCourse(course)}
            onEditCourse={(course) => {
              setEditingCourse(course);
              setIsEditModalOpen(true);
            }}
          />
        )}

        {selectedPage === 'Course' && selectedCourse && (
          <TeacherCourseDetails course={selectedCourse} onBack={() => setSelectedCourse(null)} />
        )}   
        {selectedPage === 'Assessments' && (
         <Assesments/>
        )}
        {selectedPage === 'Quizzes' && (
         <QuizDashboard/>
        )}
        {selectedPage === 'Students' && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Students</h2>
            <p>Student roster, performance, or progress tracking here...</p>
          </div>
        )}

        {selectedPage === 'Classes' && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Classes</h2>
            <p>List of classes and enrolled students...</p>
          </div>
        )}

        {selectedPage === 'Calendar' && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">Calendar</h2>
            <p>Monthly/weekly calendar layout...</p>
          </div>
        )}
      </main>
      {isEditModalOpen && (
        <EditCourseModal
          course={editingCourse}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
}
