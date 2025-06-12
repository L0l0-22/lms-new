import React, { useRef, useState, useEffect } from 'react';
import Chart from './Chart';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

export default function Learning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (isInView) setStart(true);
  }, [isInView]);

  return (
    <div className="flex flex-col md:flex-row container w-[90%] mx-auto">
      <div className="w-full md:w-1/2 p-10 pt-16" ref={ref}>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Track Your Learning Progress
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
          Stay motivated with real-time visual feedback that highlights your progress across every course.
          Whether you're just starting or advancing your skills, our system helps you stay focused on 
          your achievements, and see how far you've come. 
        </p>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
          <div className='bg-gray-50 p-3 rounded-lg shadow-[2px_4px_12px_rgba(0,0,0,0.15)]'>
            <div className="text-3xl font-bold text-primaryBlue">
              {start && <CountUp end={25} duration={6} suffix="+" />}
            </div>
            <div className="text-sm text-gray-500">Active Courses</div>
          </div>

          <div className='bg-gray-50 p-3 rounded-lg shadow-[2px_4px_12px_rgba(0,0,0,0.15)]'>
            <div className="text-3xl font-bold text-primaryBlue">
              {start && <CountUp end={1200} duration={6} suffix="+" />}
            </div>
            <div className="text-sm text-gray-500">Lessons Delivered</div>
          </div>

          <div className='bg-gray-50 p-3 rounded-lg shadow-[2px_4px_12px_rgba(0,0,0,0.15)]'>
            <div className="text-3xl font-bold text-primaryBlue">
              {start && <CountUp end={98} duration={6} suffix="%" />}
            </div>
            <div className="text-sm text-gray-500">User Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex md:justify-end">
        <Chart />
      </div>
    </div>
  );
}
