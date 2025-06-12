import React, { useState, useEffect } from "react";

export default function EditQuestionModal({ quiz, onClose, onEditQuestion }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [questionData, setQuestionData] = useState({
    questionText: "",
    options: ["", "", "", ""],
    correctAnswerIndex: 0,
  });

  useEffect(() => {
    if (quiz?.questions?.length > 0) {
      setSelectedIndex(0);
      setQuestionData(quiz.questions[0]);
    }
  }, [quiz]);

  const handleSelectChange = (e) => {
    const index = parseInt(e.target.value);
    setSelectedIndex(index);
    setQuestionData(quiz.questions[index]);
  };

  const handleInputChange = (field, value) => {
    setQuestionData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...questionData.options];
    updatedOptions[index] = value;
    setQuestionData((prev) => ({ ...prev, options: updatedOptions }));
  };

  const handleCorrectAnswerChange = (index) => {
    setQuestionData((prev) => ({ ...prev, correctAnswerIndex: index }));
  };

  const handleSave = () => {
    if (selectedIndex === null) return;
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[selectedIndex] = questionData;
    const updatedQuiz = { ...quiz, questions: updatedQuestions };
    onEditQuestion(updatedQuiz);
    onClose();
  };

  if (selectedIndex === null) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white w-full max-w-4xl rounded-xl p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit Question</h2>
          <button
            onClick={onClose}
            className="text-gray-500 font-bold hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Question selector */}
        <div className="mb-4">
          <label className="font-semibold block mb-1">Select Question</label>
          <select
            value={selectedIndex}
            onChange={handleSelectChange}
            className="w-full border rounded p-2"
          >
            {quiz.questions.map((_, index) => (
              <option key={index} value={index}>
                Question {index + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Question text */}
        <div className="mb-4">
          <label className="font-semibold block mb-1">Question Text</label>
          <input
            type="text"
            value={questionData.questionText}
            onChange={(e) => handleInputChange("questionText", e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Options */}
        <div className="mb-4">
          <label className="font-semibold block mb-2">Options</label>
          {questionData.options.map((opt, index) => (
            <div key={index} className="flex items-center gap-3 mb-2">
              <input
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                className="w-full border rounded p-2"
              />
              <label className="flex items-center gap-1 text-sm">
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={questionData.correctAnswerIndex === index}
                  onChange={() => handleCorrectAnswerChange(index)}
                />
                Correct
              </label>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-primaryGreen text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
