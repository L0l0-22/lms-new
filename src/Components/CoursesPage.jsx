import React from "react";
import background from "/webapps/lms_react/src/assets/Mask Group 35@2x.png";
import "/webapps/lms_react/src/styles/CoursesPage.css";
import card1 from "/webapps/lms_react/src/assets/Group 208@2x.png";
import card2 from "/webapps/lms_react/src/assets/Group 209@2x.png";
import card3 from "/webapps/lms_react/src/assets/Group 210@2x.png";
import card4 from "/webapps/lms_react/src/assets/Group 214@2x.png";
import card5 from "/webapps/lms_react/src/assets/Group 213@2x.png";
import card6 from "/webapps/lms_react/src/assets/Group 212@2x.png";
import card7 from "/webapps/lms_react/src/assets/Group 211@2x.png";
import card8 from "/webapps/lms_react/src/assets/Group 215@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import verifyicon from "/webapps/lms_react/src/assets/pngwing.com.png";
import wing from "/webapps/lms_react/src/assets/search-interface-symbol.png";
import { Link } from "react-router-dom";
import Line from "/webapps/lms_react/src/assets/Line.svg";
import mob10 from "/webapps/lms_react/src/assets/mob10.png";

export default function Coursespage() {
  return (
    <div>
      <div className="background">
        <picture>
          <source className="img" media="(max-width:767px)" srcset={mob10} />
          <source className="img" srcset={background} media="(min-width: 768px) and (max-width: 1023px)" />
          <source media="(min-width: 1024px)" srcset={background} />
          <img className="img" src={background} />
        </picture>
        <div className=" container mx-auto overlay-text-bg px-4">

          <h2>

            Courses
          </h2>
          <p><Link style={{ textDecoration: "none", color: "blue" }} to="/">Home </Link><span>/ Courses</span></p>

        </div>

      </div>

      <div class=" mid-content px-4">
        <div class=" text-container">
          <h6>Choose your course with our library</h6>
          <p>
            A Collection Of Over 200000 Is Simply Dummy Text Of The Printing And
            Typesetting Industry <br />. Lorem Ipsum Has Been The Industry’s
            Standard Dummy Text Ever Since The 1500S, When An <br /> Unknown
            Printer. Lorem Ipsum Is Simply Dummy Text Of The Printing And
            Typesetting Industry. <br /> Lorem Ipsum Has Been The Industry’s
            Standard Dummy.
          </p>
        </div>

        <div class="container mx-auto px-4 cards-container">
          <div className="flex">
            <img src={Line} style={{ marginRight: "10px" }} />
            <p>Find perfect one</p>

          </div>


          <h5>Check all categories and enroll</h5>


          <div class="categories-cards">
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">
                  <img src={card1} alt="Card image cap" />
                </div>
                <div class="card50-body">
                  <h5 class="card50-title">Computer Science</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">
                  <img src={card2} alt="Card image cap" />
                </div>
                <div class="card50-body">
                  <h5 class="card50-title">Health & Fitness</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">
                  <img src={card3} alt="Card image cap" />            </div>

                <div class="card50-body">
                  <h5 class="card50-title">Software Engineer</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">
                  <img src={card4} alt="Card image cap" />            </div>

                <div class="card50-body">
                  <h5 class="card50-title">Architecture</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">
                  <img src={card5} alt="Card image cap" />            </div>

                <div class="card50-body">
                  <h5 class="card50-title">Art & Design</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">
                  <img src={card6} alt="Card image cap" />            </div>

                <div class="card50-body">
                  <h5 class="card50-title">Adobe designing</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">
                  <img src={card7} alt="Card image cap" />            </div>

                <div class="card50-body">
                  <h5 class="card50-title">Analysis of Algorithms</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
            <div class="card50">
              <Link to="/softwareengineer" style={{ textDecoration: "none", color: "black" }}>
                <div className="flex justify-center items-center">

                  <img src={card8} alt="Card image cap" />  </div>
                <div class="card50-body">
                  <h5 class="card50-title">History Archaeologic</h5>
                  <p class="card-text">56 Courses</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div class="container mx-auto blue-banner">
          <div class="grid-layouts">

            <div className="text-layout-pic">
              <h5>
                If you did not find your chosen <br /> category or courses then
                seach whole
              </h5>
            </div>

            <div className="search-sec2">
              <input type="text"  placeholder="Search All Categories" />
              <Link to="/searchresult">
                <button class="search-icon-btn">
                  <img src={wing} class="wing-img" />
                </button></Link>

            </div>
          </div>

        </div>

        <div class="learn-achieve">
          <h5>
            Learn and achieve <br /> your goals
          </h5>

          <div class="container mx-auto earn-cards">
            <div class="card60">
              <img src={verifyicon} alt="Card image cap" />
              <div class="card60-body">
                <h6 class="title">Learn the latest skills</h6>
                <p class="card60-text">
                  like business analytics, graphic design, Python, and more
                </p>
              </div>
            </div>
            <div class="card60">
              <img src={verifyicon} alt="Card image cap" />
              <div class="card60-body">
                <h6 class="title">Learn the latest skills</h6>
                <p class="card60-text">
                  like business analytics, graphic design, Python, and more
                </p>
              </div>
            </div>

            <div class="card60">
              <img src={verifyicon} alt="Card image cap" />
              <div class="card60-body">
                <h6 class="title">Learn the latest skills</h6>
                <p class="card60-text">
                  like business analytics, graphic design, Python, and more
                </p>
              </div>
            </div>

            <div class="card60">
              <img src={verifyicon} alt="Card image cap" />
              <div class="card60-body">
                <h6 class="title">Learn the latest skills</h6>
                <p class="card60-text">
                  like business analytics, graphic design, Python, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
