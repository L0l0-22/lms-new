
import { motion } from "framer-motion";
import horizontal1 from "/webapps/lms_react/src/assets/pic.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="relative bg-[#EAF5FA] py-20 px-6 md:px-24">
      <motion.div
        className="relative z-10 bg-white p-10 rounded-lg shadow-lg max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={horizontal1}
            alt="Instructor"
            className="rounded-lg w-full object-cover shadow-md"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h6 className="text-blue-500 font-semibold uppercase">About</h6>
          <h2 className="text-3xl font-bold text-gray-900">Experts in E-learning</h2>
          <h5 className="text-lg text-gray-600">Distant orb has power</h5>
          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            It has been the industry’s standard dummy text ever since the 1500s.
          </p>
          <Link to='/courses'>
          <button className="font-semibold mt-5 py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
          
            Explore
          </button></Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;

