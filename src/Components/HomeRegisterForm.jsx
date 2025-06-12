import React from 'react';
import { motion } from 'framer-motion';
import Timer from './Hometimer';
import saleimg from "/webapps/lms_react/src/assets/pexels-vie-studio-4439456.jpg";

export default function OfferSection() {
  return (
    <div className="py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 p-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-[#009CE4] inline-block text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
            Limited Time Offer
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            50% Off Our Premium Services!
          </h2>
          <p className="text-gray-600 mt-3">
            Unlock premium features and take your experience to the next level. This deal won’t last long!
          </p>

          {/* Timer */}
          <div className="mt-6">
            <Timer />
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="bg-[#5e8a34] text-white font-semibold px-6 py-3 rounded hover:bg-[#4a702c] transition">
              Claim Your Offer Now
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center items-center flex-1 min-w-[280px] px-4" // add padding to avoid sticking
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={saleimg}
            alt="Offer Visual"
            className="w-[90%] max-w-[450px] h-auto object-cover rounded-2xl shadow-lg border border-gray-200"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}
