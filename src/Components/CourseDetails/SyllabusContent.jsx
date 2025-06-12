import React, { useState } from 'react'
import blackbook from "../../assets/Icon awesome-book-open (1).svg"
import Line from "../../assets/Line.svg";
import greenicon from "../../assets/Icon awesome-check-circle.svg";
export default function SyllabusContent() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
<>
 <div id="content2" className='text-sm'>
    <div className="content1-title">What you’ll learn?</div>
    <div className="content1-sec-section pt-4">
      <img src={Line} />

      <div className="verifyitem flex pt-2">
        <img src={greenicon} />
        Fugiat suspendisse maxime excepteur cillum hic cum labore
        cenas. Invent
      </div>
      <div className="verifyitem flex pt-2">
        <img src={greenicon} />
        Fugiat suspendisse maxime excepteur cillum hic cum labore
        cenas. Invent
      </div>
      <div className="verifyitem flex pt-2">
        <img src={greenicon} />
        Fugiat suspendisse maxime excepteur cillum hic cum labore
        cenas. Invent
      </div>
      <div className="content1-text">
        Perferendis, voluptatum. Exercitation justo aliquip? Convallis ligula aptent aute ab? Sit <br /> necessitatibus error, quaerat curae tristique tempore velit, nascetur ullam metus seshy <br /> molestie, etiam sapien cupiditate magni do ut, doloribus ea fusce , minim dolore magnis
      </div>

      <div className="tworows-text2">
        <div className="grid-item flex">
          <img src={greenicon} />
          Fugiat suspendisse maxime excepteu
        </div>
        <div className="grid-item flex">
          <img src={greenicon} />
          Fugiat suspendisse maxime excepteu
        </div>
        <div className="grid-item flex">
          <img src={greenicon} />
          Fugiat suspendisse maxime excepteu
        </div>
        <div className="grid-item flex">
          <img src={greenicon} />
          Fugiat suspendisse maxime excepteu
        </div>
        <div className="grid-item flex">
          <img src={greenicon} />
          Fugiat suspendisse maxime excepteu
        </div>
        <div className="grid-item flex">
          <img src={greenicon} />
          Fugiat suspendisse maxime excepteu
        </div>
      </div>
      <div className="content1-title">Course Content</div>

    </div>
  {/* accordian */}
  <div className="w-full mx-auto">
      {/* 1 */}
      <div className="border-b">
        <button
          onClick={() => toggle(0)}
          className="w-full flex justify-between items-center py-4 text-left"
        >
          <div className="text-lg font-medium">
            Introduction
            <span className="ml-2 text-sm font-normal text-gray-500">
              | 2 Lessons - 3min
            </span>
          </div>
          <span>{openIndex === 0 ? "-" : "+"}</span>
        </button>
        {openIndex === 0 && (
          <div className="space-y-4 pb-4 px-2">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img src={blackbook} alt="lesson icon" className="w-5 h-5" />
                  <span className="text-primaryBlue underline ">Introduction</span>
                </div>
                <p className="text-sm ">
                  Preview <span className="lesson-time ml-2">00:59</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2 */}
      <div className="border-b">
        <button
          onClick={() => toggle(1)}
          className="w-full flex justify-between items-center py-4 text-left"
        >
          <div className="text-lg font-medium">
            Creating a Syllabus
            <span className="ml-2 text-sm font-normal text-gray-500">
              | 6 Lessons - 57min
            </span>
          </div>
          <span>{openIndex === 1 ? "-" : "+"}</span>
        </button>
        {openIndex === 1 && (
          <div className="space-y-4 pb-4 px-2">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <img src={blackbook} alt="lesson icon" className="w-5 h-5" />
                  <span className=" text-primaryBlue underline ">Introduction</span>
                </div>
                <p className="text-sm">
                  Preview <span className="lesson-time ml-2">00:59</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</>  )
}
