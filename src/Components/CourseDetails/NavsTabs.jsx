
import { useState } from 'react';
import DescriptionContent from './DescriptionContent';
import SyllabusContent from './SyllabusContent';
import ReviewsContent from './ReviewsContent';

const NavsTabs = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const getTabClass = (tabId) => {
    const baseClass = "inline-block p-4 border-b-2 rounded-t-lg";
    const inactiveClass = "dark:border-transparent text-gray-700 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300";
    const activeClass = "text-primaryBlue hover:text-primaryBlue dark:text-blue-500 dark:hover:text-blue-500 border-primaryBlue dark:border-blue-500";
    
    return `${baseClass} ${activeTab === tabId ? activeClass : inactiveClass}`;
  };

  return (
    <div className="my-4">
      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px  font-medium text-center" role="tablist">
          <li className="me-2" role="presentation">
            <button
              className={getTabClass('Description')}
              id="Description-styled-tab"
              type="button"
              role="tab"
              aria-controls="Description"
              aria-selected={activeTab === 'Description'}
              onClick={() => setActiveTab('Description')}
            >
              Description
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={getTabClass('Syllabus')}
              id="Syllabus-styled-tab"
              type="button"
              role="tab"
              aria-controls="Syllabus"
              aria-selected={activeTab === 'Syllabus'}
              onClick={() => setActiveTab('Syllabus')}
            >
              Syllabus
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={getTabClass('Reviews')}
              id="Reviews-styled-tab"
              type="button"
              role="tab"
              aria-controls="Reviews"
              aria-selected={activeTab === 'Reviews'}
              onClick={() => setActiveTab('Reviews')}
            >
              Reviews
            </button>
          </li>
        </ul>
      </div>
      {/* Tab Contents */}
      <div id="default-styled-tab-content">
        <div className='w-[80%] mx-auto md:w-full mt-5 md:mt-0'>
        {activeTab === 'Description' && (
          <DescriptionContent/>
        )}
        </div>
        <div className='w-[80%] mx-auto md:w-full mt-5 md:mt-0'>
        {activeTab === 'Syllabus' && (
         <SyllabusContent/>
        )}
        </div>
        <div className='w-[80%] mx-auto md:w-full mt-5 md:mt-0'>
        {activeTab === 'Reviews' && (
          <ReviewsContent/>
        )}
        </div>
      </div>
    </div>
  );
};

export default NavsTabs;
