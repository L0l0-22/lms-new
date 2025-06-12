import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Intro', value: 12, fill: '#F46AA5' },
  { name: 'Drill', value: 24, fill: '#0FB0ED' },
  { name: 'Quiz', value: 17, fill: '#95D354' },
  { name: 'Build', value: 20, fill: '#FFD447' },
  { name: 'Win', value: 28, fill: '#A68EFF' },
];

const AnimatedBar = ({ x, y, width, height, fill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5,
  });

  return (
    <motion.rect
      ref={ref}
      x={x}
      y={y } 
      width={width}
      height={height}
      fill={fill}
      rx={4}
      initial={{ opacity: 0.5, y: 20, scaleY: 0.3 }}
      animate={isInView ? { opacity: 1, y: 0, scaleY: 1 } : {}}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: index * 0.15,
      }}
      style={{
        originY: 1,
        filter: isInView ? 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' : 'none',
      }}
    />
  );
};



export default function Chart() {
  return (
    <div className="bg-white p-4 w-[350px] h-[400px]">

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 0, left: 4, bottom: 30 }}
          barCategoryGap={20}
        >
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
            <YAxis hide={true} />
            {/* <YAxis
              domain={[0, 'auto']}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            /> */}
          <Bar
            dataKey="value"
            isAnimationActive={false}
            shape={(props) => (
              <AnimatedBar {...props} index={props.index} />
            )}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
