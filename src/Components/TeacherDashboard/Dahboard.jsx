import React from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer} from 'recharts';
import {Tooltip, Area, AreaChart, PieChart, Pie, Cell} from 'recharts';
import { motion, useMotionValue, animate  } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import world from "/webapps/lms_react/src/assets/world.png";
import { FaUsers, FaFileAlt, FaVideo, FaDollarSign } from 'react-icons/fa';

export default function Dashboard() {
// Revenue Reports
    const incomeValue = useMotionValue(0);
    const withdrawValue = useMotionValue(0);
    const [incomePercent, setIncomePercent] = useState(0);
    const [withdrawPercent, setWithdrawPercent] = useState(0);
    useEffect(() => {
    const incomeAnim = animate(incomeValue, 56, {
        onUpdate: latest => setIncomePercent(Math.round(latest)),
    });
    const withdrawAnim = animate(withdrawValue, 42, {
        onUpdate: latest => setWithdrawPercent(Math.round(latest)),
    });
    return () => {
        incomeAnim.stop();
        withdrawAnim.stop();
  };
    }, []);
// Course purchase
     const purchase = [
        { name: '', value: 3 },
        { name: '', value: 5 },
        { name: '', value: 6 },
        { name: '', value: 8 },
        { name: '', value: 7 },
        { name: '', value: 9 },
        { name: '', value: 8 },
    ];
   const AnimatedBar = ({ x, y, width, height, fill }) => {
    return (
        <motion.rect
        initial={{
            height: 0,
            y: y + height,
            opacity: 0.5
        }}
        animate={{
            height,
            y,
            opacity: 1,
        }}
        transition={{
            duration: 1,
            ease: 'easeOut',
        }}
        x={x}
        width={width}
        fill={fill}
        rx={8}
        ry={8}
        />
    );
    };
// viewers
    const data = [
    { name: '', value: 200 },
    { name: '', value: 100 },
    { name: '', value: 140 },
    { name: '', value: 300 },
    { name: '', value: 90 },
    { name: '', value: 230 },
    { name: '', value: 190 },
    ];
    const [chartKey, setChartKey] = useState(0);
    useEffect(() => {
    // Wait 2 frames to make sure layout is ready
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
        setChartKey(Date.now()); // unique key triggers remount
        });
    });
    }, []);
// student performance
    const performance = [
      { name: 'On track', value: 60 },
      { name: 'At risk', value: 20 },
      { name: 'Behind', value: 20 },
    ];
    const COLORS = ['#0FB0ED', '#1077A8', '#0A2E40'];
    const [renderChart, setRenderChart] = useState(false);
    useEffect(() => {
      requestAnimationFrame(() => {
        setRenderChart(Date.now());
      });
    }, []);
// map
    const map = [
      { country: 'Egypt', top: '49%', left: '56%', color: '#10B981', percent: 65 },
      { country: 'UAE', top: '58%', left: '65%', color: '#6366F1', percent: 20 },
      { country: 'Canada', top: '28%', left: '23%', color: '#3B82F6', percent: 5 },
      { country: 'Netherlands', top: '37.5%', left: '49.5%', color: '#FB923C', percent: 2 },
      { country: 'South Africa', top: '75%', left: '56%', color: '#8B5CF6', percent: 8 },
    ];
// status 
    const stats = [
        {
          label: 'Total students',
          value: '40k',
          icon: <FaUsers className="text-green-500" size={28}/>,
          bg: 'bg-green-100',
        },
        {
          label: 'Courses',
          value: '45',
          icon: <FaFileAlt className="text-blue-500" size={28} />,
          bg: 'bg-blue-100',
        },
        {
          label: 'Total Videos',
          value: '120',
          icon: <FaVideo className="text-cyan-500" size={28} />,
          bg: 'bg-cyan-50',
        },
        {
          label: 'Total Earning',
          value: '$3200',
          icon: <FaDollarSign className="text-yellow-500" size={28} />,
          bg: 'bg-yellow-100',
        },
      ];


  return (
    <div className='md:space-y-5'>
    <div className="flex flex-col md:flex-row flex-wrap gap-y-5 justify-around">
       {/* row1 */}

        {/* 1 */}
        <div className="bg-white rounded-xl p-4 shadow w-full md:w-[45%] lg:w-[32%] ">
            <h3 className="text-2xl font-bold mb-2 ">Revenue Reports</h3>
            <p className="text-2xl font-semibold text-gray-700 mb-4">$7601.96</p>
            <div className="flex justify-around">
                <div className="flex flex-col items-center space-y-2">
                <motion.div
                    className="radial-progress text-primaryBlue"
                    style={{ "--value": incomePercent }}
                    role="progressbar"
                    aria-valuenow={incomePercent}
                >
                    {incomePercent}%
                </motion.div>
                <p className="text-sm text-gray-500">Income</p>
                <p className="text-lg font-semibold text-primaryBlue">$5200.98</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                <div
                    className="radial-progress text-primaryBlue"
                    style={{ "--value": withdrawPercent }}
                    role="progressbar"
                    aria-valuenow={withdrawPercent}
                >
                    {withdrawPercent}%
                </div>
                <p className="text-sm text-gray-500">Withdraw</p>
                <p className="text-lg font-semibold text-primaryBlue">$2400.98</p>
                </div>
            </div>
        </div>
        {/* 2 */}
        <div className="bg-white rounded-xl p-4 shadow-md w-full md:w-[45%] lg:w-[32%] ">
            <h3 className="text-2xl font-bold mb-2 ">
                Course purchase
            </h3>
            <p className="text-2xl font-semibold text-gray-700 mb-4">
                $12,000
            </p>
            <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={purchase}>
                    <Bar
                    dataKey="value"
                    fill="#0fb0ed"
                    barSize={18}
                    shape={<AnimatedBar />}
                    />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} />
                </BarChart>
                </ResponsiveContainer>
            </div>

      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Last 30 days</span>
        <span> may</span>
      </div>
        </div>
        {/* 3 */}
       <div className="bg-white rounded-xl p-4 shadow-md w-full md:w-[45%] lg:w-[32%] ">
            <h3 className="text-2xl font-bold mb-2">Course sales</h3>
            <p className="text-2xl font-semibold text-gray-700 mb-12">$3200.98</p>
            <div className="flex justify-between text-sm text-gray-500 mt-2 mb-3">
                <div>
                <p>Current</p>
                <p className='text-lg font-semibold text-gray-800'>$12,000</p>
                </div>
                <div>
                <p>Last term</p>
                <p className='text-lg font-semibold text-gray-800'>$15.200</p>
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden ">
                <motion.div
                className="bg-[#0fb0ed] h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                />
            </div>
            
        </div>
    {/* row2 */}

        {/* 1 */}
        <div className="bg-white rounded-xl p-4 shadow-md w-full md:w-[45%] lg:w-[32%]">
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-2xl font-bold mb-2 ">
                    Total viewers
                </h3>
                <p className="text-base font-normal text-gray-500">Last 30 days</p>
            </div>
            <div className="flex  space-x-6">
            <h5 className="leading-none text-3xl font-semibold text-gray-700 pb-2">32.4k</h5>
            <div className="flex items-center px-2 text-base font-semibold text-white rounded-lg bg-primaryGreen">
                12%
                <FaArrowUp size={16} className="mb-1 ml-1" />
            </div>
              </div>
            {/* Graph */}
            <div className="w-full h-20 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} key={chartKey}>
                  <defs>
                    <linearGradient id="colorGraph" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0fb0ed" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#0fb0ed" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <XAxis dataKey="name" hide />
                  <Tooltip
                //    contentStyle={{ display: "none" }} 
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#0fb0ed"
                    fill="url(#colorGraph)"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={true}
                    animationDuration={1000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
        </div>
        {/* 2 */}
        <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-[45%] lg:w-[32%] flex flex-col">
            <h3 className="text-2xl font-bold mb-9">
            Student performance
            </h3>
        <div className="flex items-center justify-evenly">
            {/* Donut Chart */}
            <div className="w-28 h-28">
            {renderChart && (
                <ResponsiveContainer width="100%" height="100%">
                <PieChart key={renderChart}>
                    <Pie
                    data={performance}
                    innerRadius={40}
                    outerRadius={55}
                    paddingAngle={2}
                    dataKey="value"
                    isAnimationActive={true}
                    animationDuration={1000}
                    >
                    {performance.map((entry, index) => (
                        <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
            )}
            </div>
            <div className="ml-2 text-sm space-y-2">
            {performance.map((entry, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }}></span>
                {entry.name}
                </div>
            ))}
            </div>
        </div>
        </div>
        {/* 3 */}
        <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-[45%] lg:w-[32%] flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Top Engagement</h3>
              <div className="relative ">
                {/* World map background */}
                <img src={world} alt="World Map" className="object-cover w-full opacity-90 h-28" />

                {/* Country markers */}
                {map.map((point, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full border-2 border-white shadow"
                    style={{
                      top: point.top,
                      left: point.left,
                      backgroundColor: point.color,
                      transform: 'translate(-50%, -50%)',
                    }}
                    title={`${point.country} - ${point.percent}%`}
                  ></div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-700">
                {map.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.country} <span className="font-semibold text-gray-900">{item.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
      </div>

    {/* row3 */}
    <div className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 mt-5 mx-2">
      {stats.map((item, i) => (
        <div key={i} className="flex items-center gap-4 px-4">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bg}`}>
            {item.icon}
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
            <p className=" text-gray-500">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
