import * as React from "react";
import user from "../../assets/Mask Group 35.png";
import bg from "../../assets/background.png";
import "/webapps/lms_react/src/styles/CourseDetails.css";
import picrounded from "../../assets/picrounded.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import playbtn from "../../assets/play.png";
import Line from "../../assets/Line.svg";
import enroll from "../../assets/Icon awesome-user-alt.svg"
import courselevel from "../../assets/Group 162324.svg"
import courseduration from "../../assets/Group 162325.svg"
import bluebook from "../../assets/Icon awesome-user-alt.svg"
import mob from "../../assets/mobviewforsoftware.png";
import LessonsSidebar from "../../Components/CourseDetails/LessonsSidebar";
import rightpic from "../../assets/vedio2.png";
import NavsTabs from "../../Components/CourseDetails/NavsTabs";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function CourseDetails() {
  return (
    <div>
      <Navbar />
      {/* sw bg */}
      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px]  ">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <div className="absolute inset-0 z-10 pt-2">
          <picture>
            <source media="(max-width: 767px)" srcSet={mob} />
            <source media="(min-width: 768px)" srcSet={user} />
            <img
              src={user}
              alt="foreground"
              className="w-full h-full object-contain"
            />
          </picture>
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center text-white container mx-auto w-[95%] md:w-[80%] lg:w-[90%] text-left">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-2">Software Engineer</h2>
          <p className="text-sm md:text-base">
            Home / Courses
            <span className="font-semibold ml-1 block md:inline">/ Software Engineer</span>
          </p>
        </div>

      </div>
      <div className="w-[90%] mx-auto  container">
        {/* header */}
        <div className="pre-text mb-5">
          <h6 className="flex items-center my-4 md:my-6">
            <img src={Line} alt="Line" className="mr-2 w-4 md:w-auto" />
            <span className="text-sm md:text-base">Start your learning journey</span>
          </h6>
          <h3 className="text-xs leading-10 lg:text-xl font-semibold text-gray-800">
            How to learn JavaScript Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h3>
        </div>
        <div className="flex flex-col justify-center col-gap-4 lg:flex-row space-y-4 lg:space-y-0 lg:space-x-9 mx-auto">
          <LessonsSidebar />
          <div className="mx-5 lg:w-full">
            {/* header side */}
            <div className="hidden md:flex  flex-col md:flex-row flex-wrap gap-2 md:gap-0">
              <div className="w-1/6 md:w-1/12">
                <img src={picrounded} alt="Author" className="w-8 md:w-11 lg:w-auto" />
              </div>
              <div className="w-full md:w-1/4 author text-sm md:text-base flex flex-row md:flex-col">
                <span>Author:</span>
                <p>Mennah Ahmed</p>
              </div>
              <div className="w-full md:w-1/4 pr-0 text-sm md:text-base flex flex-row md:flex-col">
                <span>Reviews: </span>
                <p className="text-yellow-400">
                  <FontAwesomeIcon icon={faStar} size="xs" />
                  <FontAwesomeIcon icon={faStar} size="xs" />
                  <FontAwesomeIcon icon={faStar} size="xs" />
                  <FontAwesomeIcon icon={faStar} size="xs" />
                  <FontAwesomeIcon icon={faStar} size="xs" />
                </p>
              </div>

              <div className="w-full md:w-1/6 pr-0 text-sm md:text-base flex flex-row md:flex-col">
                <span>Price: </span>
                <p className="font-semibold text-blue-500">$299</p>
              </div>

              <div className="w-full md:w-1/4 pl-7">
              <Link to='/shoppingcart'>
                <button className="text-sm md:text-base bg-primaryGreen p-3 text-white rounded-md font-semibold hover:bg-lime-600 transition-colors duration-200" >
                  Add to Cart
                  <FontAwesomeIcon icon={faArrowRight} className="btnarrow" />
                </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex  my-4 md:my-6 flex-col md:flex-row flex-wrap gap-2 md:gap-0">
              <div className="w-full md:w-1/3 flex items-center text-sm md:text-base">
                <img src={enroll} className="profileicon mr-1 w-4 md:w-auto" alt="Enroll Icon" />
                <span>Enrolled : 564</span>
              </div>
              <div className="w-full md:w-1/4 flex items-center text-sm md:text-base">
                <img src={courselevel} className="profileicon mr-1 w-4 md:w-auto" alt="Course Level Icon" />
                <span>Intermediate</span>
              </div>
              <div className="w-full md:w-1/4 paddingmob flex items-center text-sm md:text-base">
                <img src={courseduration} className="profileicon mr-1 w-4 md:w-auto" alt="Course Duration Icon" />
                <span>7 hours</span>
              </div>

              <div className="w-full md:w-1/6 paddingmob2 flex items-center text-sm md:text-base ">
                <img src={bluebook} className="worldicon mr-1 w-4 md:w-auto" alt="Blue Book Icon" />
                <span>20 Lessons</span>
              </div>
            </div>
            {/* Small Screen View */}
            <div className="flex flex-col gap-2 md:hidden">
              <div className="grid grid-cols-2 ">
                <div className="flex items-center gap-2">
                  <img src={picrounded} alt="Author" className="w-8" />
                  <span className="text-sm">Mennah Ahmed</span>
                </div>

                <div className="text-sm flex items-center gap-1 space-x-2">
                  <span>Reviews</span>
                  <span className="text-yellow-400">
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                    <FontAwesomeIcon icon={faStar} size="xs" />
                  </span>
                </div>

                <div className="text-sm mt-3 font-semibold">
                 Price:
                  <span className="text-blue-500 ">$299</span>
                </div>
                <Link to='/shoppingcart'>
                <button className="text-sm bg-primaryGreen w-3/4 py-2 text-white rounded-md " >
                  Add to Cart <FontAwesomeIcon icon={faArrowRight} className="btnarrow" />
                </button>
                </Link>
              </div>


              <div className=" my-2 space-y-1 text-sm grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <img src={enroll} className="w-4" alt="Enroll Icon" />
                  <span>Enrolled: 564</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={courselevel} className="w-4" alt="Level Icon" />
                  <span>Intermediate</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={courseduration} className="w-4" alt="Duration Icon" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={bluebook} className="w-4" alt="Lessons Icon" />
                  <span>20 Lessons</span>
                </div>
              </div>
            </div>

            {/* vedio */}
            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[70vh]  ">
              <img
                src={rightpic}
                alt="Video Thumbnail"
                className="h-full w-full object-fill block"
              />
              <img
                src={playbtn}
                alt="Play Button"
                className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer w-8 md:w-auto"
              />
            </div>
            <NavsTabs />

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}