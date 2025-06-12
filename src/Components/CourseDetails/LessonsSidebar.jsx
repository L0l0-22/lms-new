import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";



export default function LessonsSidebar() {
    const sections = [
        {
          id: 1,
          title: "Section 1: Getting Started",
          lessons: [
            { id: 1, title: "Introduction" },
            { id: 2, title: "Lesson 1: Basics" },
            { id: 3, title: "Lesson 2: Setup" },
          ],
        },
        {
          id: 2,
          title: "Section 2: Intermediate Topics",
          lessons: [
            { id: 4, title: "Lesson 3: Components" },
            { id: 5, title: "Lesson 4: State & Props" },
          ],
        },
        {
          id: 3,
          title: "Section 3: Advanced Topics",
          lessons: [
            { id: 6, title: "Lesson 5: Hooks" },
            { id: 7, title: "Lesson 6: Context API" },
          ],
        },
        {
          id: 4,
          title: "Section 4: React Router",
          lessons: [
            { id: 8, title: "Lesson 7: Routing Basics" },
            { id: 9, title: "Lesson 8: Dynamic Routing" },
          ],
        },
        {
          id: 5,
          title: "Section 5: State Management",
          lessons: [
            { id: 10, title: "Lesson 9: Redux Introduction" },
            { id: 11, title: "Lesson 10: Redux Toolkit" },
          ],
        },
        {
          id: 6,
          title: "Section 6: Performance ",
          lessons: [
            { id: 12, title: "Lesson 11: React.memo & useMemo" },
            { id: 13, title: "Lesson 12: Lazy Loading" },
          ],
        },
      ];
      
  const [opensectionId, setOpensectionId] = useState(1);
  const [activeLessonId, setActiveLessonId] = useState(1);

  const togglesection = (id) => {
    setOpensectionId(opensectionId === id ? null : id);
  };
  const handleLessonClick = (lessonId) => {
    setActiveLessonId(lessonId);
  };
  return (
    <div className="">
      <aside className="lg:w-80 w-full h-fit bg-gray-100 border-r shadow-sm overflow-y-auto">
        <div className="p-4 text-lg font-bold border-b">Lessons</div>
        <ul className="py-4 px-2 space-y-5 mb-20">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => togglesection(section.id)}
                className="w-full flex items-center justify-between py-2 font-semibold hover:bg-gray-200 rounded"
              >
                <span className="pl-3">{section.title}</span>
                {opensectionId === section.id ? (
                  <FiChevronDown size={16} />
                ) : (
                  <FiChevronRight size={16} />
                )}
              </button>
              {opensectionId === section.id && (
                <ul className="ml-4 mt-2 space-y-1 ">
                  {section.lessons.map((lesson) => (
                     <li
                     key={lesson.id}
                     onClick={() => handleLessonClick(lesson.id)}
                     className={`p-2 rounded cursor-pointer text-sm ${
                       lesson.id === activeLessonId
                         ? "bg-[#95D354] text-white font-semibold"
                         : "hover:bg-gray-200"
                     }`}
                   >
                     {lesson.title}
                   </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
