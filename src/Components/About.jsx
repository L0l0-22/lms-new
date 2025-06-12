import { motion } from "framer-motion";
import teacher1 from "/webapps/lms_react/src/assets/teacher1.png";
import teacher2 from "/webapps/lms_react/src/assets/teacher2.png";
import teacher3 from "/webapps/lms_react/src/assets/teacher3.png";
import teacher4 from "/webapps/lms_react/src/assets/teacher4.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
  <div className=" h-auto md:min-h-[60vh]">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between py-16 container mx-auto w-[90%] relative h-full" 
       initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
            className="w-full md:w-1/2 space-y-5 h-full"
          >
        <h2 className="text-4xl font-bold text-gray-900 leading-relaxed">
          Empower Your Learning Journey
        </h2>
        <p className="text-gray-700 text-lg">
          Learn from passionate instructors with real-world experience. Gain the skills you need to grow, achieve, and succeed — at your own pace.
        </p>
        <ul className="text-gray-600 space-y-1">
          <li>✔ Interactive lessons</li>
          <li>✔ Real projects & certifications</li>
          <li>✔ 100% online and flexible</li>
        </ul>
       <Link to='/courses'>
          <button className="font-semibold mt-5 py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
          
            Explore
          </button>
          </Link>
        </motion.div>

        {/* images */}
        <div className="flex w-full md:w-1/2 justify-center gap-4 mt-10 md:mt-0 relative h-full">
          <div className="space-y-3">
            <motion.img
              src={teacher1}
              alt="Teacher 1"
              className="w-40 h-52 object-contain rounded-tl-xl bg-[#ffc4a6]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            />
            <motion.img
              src={teacher2}
              alt="Teacher 4"
              className="w-40 h-36 object-contain rounded-bl-xl bg-primaryBlue"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            />
          </div>

          <div className="space-y-3">
            <motion.img
              src={teacher4}
              alt="Teacher 2"
              className="w-40 h-36 object-contain rounded-tr-xl bg-primaryGreen"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            />
            <motion.img
              src={teacher3}
              alt="Teacher 3"
              className="w-40 h-52 object-contain rounded-br-xl bg-[#ffc4a6] pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

