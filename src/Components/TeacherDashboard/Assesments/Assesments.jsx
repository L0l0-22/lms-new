import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { RiBarChart2Line } from "react-icons/ri";
import AddAssesmentModal from "./AddAssesmentModal";
import { FaEdit, FaEye } from "react-icons/fa";
import ViewModal from "./ViewModal";
import EditAssessmentModal from "./EditAssessmentModal";
export default function Assesments() {
   const [assessments, setAssessments] = useState([
  {
    course: "Pro Frontend Engineer ReactJS",
    assessment: "QA / Testing Assessment",
    totalEnrolled: 50,
    completed: 32,
    averageScore: 78,
    dueDate: "June 20, 2025",
  },
  {
    course: "Advanced React: Design System, Patterns",
    assessment: "DevOps Assessment",
    totalEnrolled: 60,
    completed: 45,
    averageScore: 85,
    dueDate: "June 25, 2025",
  },
  {
    course: "Next.js 15 & React - The Complete Guide",
    assessment: "Data Management Assessment",
    totalEnrolled: 80,
    completed: 70,
    averageScore: 91,
    dueDate: "July 1, 2025",
  },
  {
    course: "Pro Frontend Engineer ReactJS",
    assessment: "Product Delivery",
    totalEnrolled: 40,
    completed: 40,
    averageScore: 95,
    dueDate: "May 15, 2025",
  },
    ]);
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [assessmentToEdit, setAssessmentToEdit] = useState(null);
  const handleEditSave = (updatedAssessment) => {
    setAssessments((prev) =>
      prev.map((item) =>
        item === assessmentToEdit ? updatedAssessment : item
      )
    );
  };

  const handleAddAssesment = (newCourse) => {
    const fullCourse = {
      ...newCourse,
      id: assessments.length + 1,
    };
    setAssessments((prev) => [...prev, fullCourse]);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 md:gap-12 w-full md:w-[48%] lg:w-1/4">
            <div className="bg-primaryBlue text-white rounded-full p-2 ml-4">
                <PiStudentDuotone size={32}/>
            </div>
          <div>
            <h2 className="text-2xl font-bold">1 7</h2>
            <p className="text-sm font-bold text-gray-500">Enrolled Students</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 md:gap-12 w-full md:w-[48%] lg:w-1/4">
            <div className="bg-primaryBlue text-white rounded-full p-3 ml-4">
                <MdOutlineRocketLaunch size={32}/>
            </div>
          <div>
            <h2 className="text-2xl font-bold">1 2</h2>
            <p className="text-sm font-bold text-gray-500">In Progress Assessments</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 md:gap-12 w-full md:w-[48%] lg:w-1/4">
            <div className="bg-primaryBlue text-white rounded-full p-2 ml-4">
                <AiOutlineCheckCircle size={32} />
            </div>
            <div>
                <h2 className="text-2xl font-bold">8</h2>
                <p className="text-sm font-bold text-gray-500">Completed Assessments</p>
            </div>
        </div>
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 md:gap-12 w-full md:w-[48%] lg:w-1/4">
            <div className="bg-primaryBlue text-white rounded-full p-2 ml-4">
                <RiBarChart2Line size={32} />
            </div>
            <div>
                <h2 className="text-2xl font-bold">76%</h2>
                <p className="text-sm font-bold text-gray-500">Avg. Completion Rate</p>
            </div>
        </div>
      </div>
      {/* Table */}
      <div className="bg-white rounded-lg shadow p-6 overflow-auto">
        <div className="flex justify-between items-center py-5">
            <h4 className=" text-2xl font-bold">
                Assesments
            </h4>
            <button
                onClick={() => setNewModalOpen(true)}
                className="bg-primaryBlue text-xs px-3 py-1 md:px-4 md:py-2 md:text-base text-white rounded-lg hover:bg-[#0CA0D6]"
                >
                + Add 
            </button>
          {newModalOpen && (
            <AddAssesmentModal
              onClose={() => setNewModalOpen(false)}
              onAddAssesment={handleAddAssesment}
            />
          )}
        </div>
      <table className="w-full border-collapse">
         <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-3">Course Name</th>
              <th>Assessment Title</th>
              <th>Completed</th>
              <th>Avg. Score</th>
              <th>Due Date</th>
              <th></th>
            </tr>
          </thead>

         <tbody>
        {assessments.map((item, i) => (
          <tr key={i} className="hover:bg-gray-50 border-b border-gray-200">
            <td className="py-4 font-semibold text-gray-600">{item.course}</td>
            <td className="py-4 text-gray-600 font-medium">{item.assessment}</td>
            <td className="py-4 ">
              <span className="px-3 py-1 ml-5 text-sky-600 bg-sky-100 rounded-full">
                {item.completed}
              </span>
            </td>
            <td className="py-4">
              <span className="px-3 py-1 ml-3 text-[#b25d5d] bg-[#ffe6e5] rounded-full">
                {item.averageScore}%
              </span>
            </td>
             <td className="py-4 text-gray-600">{item.dueDate}</td>
             <td className="py-4 space-x-3">
               <button
                onClick={() => {
                  setSelectedAssessment(item);
                  setViewModalOpen(true);
                }}
                className="text-primaryBlue border border-primaryBlue rounded-full p-2 text-sm hover:bg-primaryBlue hover:text-white"
              >
                <FaEye size={18} />
              </button>
              {viewModalOpen && selectedAssessment && (
             <ViewModal onClose={() => setViewModalOpen(false)} pdfFile={selectedAssessment?.pdfFile} />

              )}
            
              <button
                onClick={() => {
                  setAssessmentToEdit(item);
                  setEditModalOpen(true);
                }}
                className="text-primaryGreen font-bold border border-primaryGreen rounded-full p-2 hover:bg-primaryGreen hover:text-white"
              >
                <FaEdit size={18} />
              </button>
                {editModalOpen && assessmentToEdit && (
                  <EditAssessmentModal
                    onClose={() => setEditModalOpen(false)}
                    onSave={handleEditSave}
                    initialData={assessmentToEdit}
                  />
                )}

            </td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </div>
  );
}
