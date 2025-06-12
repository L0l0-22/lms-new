import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { RiBarChart2Line } from "react-icons/ri";
import AddQuizModal from "./AddQuizModal";
import AddQuestionsModal from "./AddQuestionModal";
import { useNavigate } from "react-router-dom";
import EditQuestionModal from "./EditQuestionModal";
export default function Quizzes() {
 const [quizzes, setQuizzes] = useState([
  {
    id: 1,
    course: "React Fundamentals",
    quizTitle: "Hooks Basics Quiz",
    totalQuestions: 10,
    attempts: 25,
    averageScore: 82,
    dueDate: "July 10, 2025",
    questions: [
      {
        questionText: "What is useState used for?",
        options: ["Data fetching", "Managing state", "Styling", "Routing"],
        correctAnswerIndex: 1
      } , 
        {
        questionText: "What is React.memo used for?",
        options: ["State update", "Performance boost", "Routing", "Context API"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    id: 2,
    course: "Advanced React",
    quizTitle: "Performance Patterns",
    totalQuestions: 8,
    attempts: 40,
    averageScore: 77,
    dueDate: "July 15, 2025",
    questions: [
      {
        questionText: "What is React.memo used for?",
        options: ["State update", "Performance boost", "Routing", "Context API"],
        correctAnswerIndex: 1
      }
    ]
  }
]);

  const [newModalOpen, setNewModalOpen] = useState(false);
  const [addQuestionModalOpen, setAddQuestionModalOpen] = useState(false);
  const [editQuestionModalOpen, setEditQuestionModalOpen] = useState(false);
  const [quizForQuestions, setQuizForQuestions] = useState(null);
  const navigate = useNavigate(); 

  const handleAddQuiz = (newQuiz) => {
    const fullQuiz = {
      ...newQuiz,
      id: quizzes.length + 1,
    };
    setQuizzes((prev) => [...prev, fullQuiz]);
  };

    const handleAddQuestions = (quiz) => {
    setQuizForQuestions(quiz);
    setAddQuestionModalOpen(true);
    };

    const handleAddQuestion = () => {
    // Logic to save the question can go here
    console.log("Question added!");
    setAddQuestionModalOpen(false);
    };

    const handleEditQuestion = (updatedQuiz) => {
    setQuizzes((prevQuizzes) =>
        prevQuizzes.map((quiz) =>
        quiz.id === updatedQuiz.id ? updatedQuiz : quiz
        )
    );
    console.log("Question updated!");
    setEditQuestionModalOpen(false);
    };


  return (
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 w-full lg:w-1/4">
          <div className="bg-primaryBlue text-white rounded-full p-2 ml-4">
            <PiStudentDuotone size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">175</h2>
            <p className="text-sm font-bold text-gray-500">Quiz Attempts</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 w-full lg:w-1/4">
          <div className="bg-primaryBlue text-white rounded-full p-3 ml-4">
            <MdOutlineRocketLaunch size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">5</h2>
            <p className="text-sm font-bold text-gray-500">Active Quizzes</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 w-full lg:w-1/4">
          <div className="bg-primaryBlue text-white rounded-full p-2 ml-4">
            <AiOutlineCheckCircle size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">12</h2>
            <p className="text-sm font-bold text-gray-500">Completed Quizzes</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow hover:shadow-md p-4 flex items-center gap-5 w-full lg:w-1/4">
          <div className="bg-primaryBlue text-white rounded-full p-2 ml-4">
            <RiBarChart2Line size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">79%</h2>
            <p className="text-sm font-bold text-gray-500">Avg. Score</p>
          </div>
        </div>
      </div>

      {/* Quiz Table */}
      <div className="bg-white rounded-lg shadow p-6 overflow-auto">
        <div className="flex justify-between items-center py-5">
          <h4 className="text-2xl font-bold">Quizzes</h4>
          <button
            onClick={() => setNewModalOpen(true)}
            className="bg-primaryBlue text-xs px-3 py-1 md:px-4 md:py-2 md:text-base text-white rounded-lg hover:bg-[#0CA0D6]"
          >
            + Add
          </button>
          {newModalOpen && (
            <AddQuizModal
              onClose={() => setNewModalOpen(false)}
              onAddQuiz={handleAddQuiz}
            />
          )}
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-3">Course</th>
              <th>Quiz Title</th>
              <th>Total Questions</th>
              <th>Attempts</th>
              <th>Avg. Score</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz.id} className="hover:bg-gray-50 border-b border-gray-200">
                <td className="py-4 font-semibold text-gray-600">{quiz.course}</td>
                <td className="py-4 text-gray-600 font-medium">{quiz.quizTitle}</td>
                <td className="py-4 ">
                 <span className="px-3 py-1 ml-9 text-sky-600 bg-sky-100 rounded-full">
                    {quiz.totalQuestions}
                </span>
                </td>
                <td className="py-4">
                <span className="px-3 py-1 ml-3 text-green-700 bg-green-100 rounded-full">
                    {quiz.attempts}
                </span>  

                </td>
                <td className="py-4">
                  <span className="px-3 py-1 ml-3 text-[#b25d5d] bg-[#ffe6e5] rounded-full">
                    {quiz.averageScore}%
                  </span>
                </td>
                <td className="py-4 space-x-3">
                     <button
                    onClick={() => handleAddQuestions(quiz)}
                    className="hover:text-primaryGreen border hover:border-primaryGreen rounded-lg p-2 text-sm bg-primaryGreen hover:bg-transparent text-white "
                    >
                        Add Questions
                    </button> 
                    {addQuestionModalOpen && quizForQuestions && (
                    <AddQuestionsModal
                        quiz={quizForQuestions}
                        onClose={() => setAddQuestionModalOpen(false)}
                        onAddQuestion={handleAddQuestion}
                    />
                    )}
                     <button
                        onClick={() => {
                            navigate(`/quiz`);
                        }}
                        className="hover:text-primaryBlue border hover:border-primaryBlue rounded-lg p-2 text-sm bg-primaryBlue hover:bg-transparent text-white "
                    >
                        View Quiz
                    </button>
                    <button
                        onClick={() => {
                        setQuizForQuestions(quiz); 
                        setEditQuestionModalOpen(true);
                        }}
                        className="hover:text-[#b25d5d] border hover:border-[#b25d5d] rounded-lg p-2 text-sm bg-[#b25d5d] hover:bg-transparent text-white"
                    >
                        Edit 
                    </button>
                       {editQuestionModalOpen && quizForQuestions && (
                        <EditQuestionModal
                            quiz={quizForQuestions}
                            onClose={() => setEditQuestionModalOpen(false)}
                            onEditQuestion={handleEditQuestion}
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
