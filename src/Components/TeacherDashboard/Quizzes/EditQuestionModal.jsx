import React, { useState, useEffect } from "react";

export default function EditQuestionModal({ quiz, onClose, onEditQuestion }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (quiz?.questions?.length > 0) {
      setQuestions(quiz.questions);
    }
  }, [quiz]);

  const handleInputChange = (qIndex, field, value) => {
    const updated = [...questions];
    updated[qIndex][field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectAnswerChange = (qIndex, index) => {
    const updated = [...questions];
    updated[qIndex].correctAnswerIndex = index;
    setQuestions(updated);
  };

  const handleDeleteQuestion = (qIndex) => {
    const updated = [...questions];
    updated.splice(qIndex, 1);
    setQuestions(updated);
  };

  const handleSaveAll = () => {
    const updatedQuiz = { ...quiz, questions };
    onEditQuestion(updatedQuiz);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-full max-w-5xl rounded-xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Questions</h2>
          <button
            onClick={onClose}
            className="text-gray-500 font-bold hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Fallback for no questions */}
        {questions.length === 0 ? (
          <p className="text-center text-gray-500 my-10">
            No questions available.
          </p>
        ) : (
          questions.map((question, qIndex) => (
            <div key={qIndex} className="mb-6 p-4 border rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Question {qIndex + 1}</h3>
                <button
                  onClick={() => handleDeleteQuestion(qIndex)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  🗑 Delete
                </button>
              </div>

              {/* Question Text */}
              <div className="mb-3">
                <label className="block font-medium mb-1">Question Text</label>
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) =>
                    handleInputChange(qIndex, "questionText", e.target.value)
                  }
                  className="w-full border rounded p-2"
                />
              </div>

              {/* Options */}
              <div className="mb-3">
                <label className="block font-medium mb-2">Options</label>
                {question.options.map((opt, optIndex) => (
                  <div
                    key={optIndex}
                    className="flex items-center gap-3 mb-2"
                  >
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) =>
                        handleOptionChange(qIndex, optIndex, e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />
                    <label className="flex items-center gap-1 text-sm">
                      <input
                        type="radio"
                        name={`correct-${qIndex}`}
                        checked={question.correctAnswerIndex === optIndex}
                        onChange={() =>
                          handleCorrectAnswerChange(qIndex, optIndex)
                        }
                      />
                      Correct
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveAll}
            className="px-4 py-2 bg-primaryGreen text-white rounded hover:bg-green-600"
            disabled={questions.length === 0}
          >
            Save All
          </button>
        </div>
      </div>
    </div>
  );
}
