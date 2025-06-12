import React, { useState } from "react";
import "/webapps/lms_react/src/styles/CategoryPage.css";
import back from "/webapps/lms_react/src/assets/Mask Group 35.png";
import singlecoursepic from "/webapps/lms_react/src/assets/pic2.png";
import { Link, NavLink } from "react-router-dom";
import Line from "/webapps/lms_react/src/assets/Line.svg";
import singlecoursepic1 from "/webapps/lms_react/src/assets/Mask Group 37@2x.png";
import techerpic from "/webapps/lms_react/src/assets/pic3.png";
import lessonicon from "/webapps/lms_react/src/assets/Icon awesome-book-open.png";
import mob from "/webapps/lms_react/src/assets/mobviewforsoftware.png";
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function CategoryPageContent() {
  const [liked, setLiked] = useState(false);
  const [content, setContent] = useState("Content 1");
  const [activeTag, setActiveTag] = useState("tag1");

  const toggleLike = () => {
    setLiked(prev => !prev);
  };
  const handleClick = (e) => {
    const links = Array.from(document.querySelectorAll(".menu-link"));
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
    // Add your existing onClick action here
  };

  const cards = Array(6).fill({
    courseImg: singlecoursepic1,
    teacherImg: techerpic,
    teacherName: 'Ahmed Ali',
    title: 'Web Designing Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’',
    lessons: 10,
    price: 299,
    lessonIcon: lessonicon,
  });

  const changeContent = (id, tagname) => {
    switch (id) {
      case "most-btn":
        setContent("Content 1");
        break;
      case "new-btn":
        setContent("Content 2");
        break;
      case "bg-btn":
        setContent("Content 3");
        break;
      default:
        setContent("");
        break;
    }
    setActiveTag(tagname);
  };
  return (
    <div>
      <div className="sofware-background ">
        <picture>
          <source className="img" media="(max-width:767px)" srcset={mob} />
          <source className="img" srcset={back} media="(min-width: 768px) and (max-width: 1023px)" />
          <source media="(min-width: 1024px)" srcset={back} />
          <img className="img" src={back} />
        </picture>
        <div className=" container overlay-text-bg px-4">
          <h2>Software Engineer</h2>
          <p><Link to="/" style={{ textDecoration: "none", color: "#212529" }}>
            Home  / Courses </Link><span class="block-sec-pass"> / Software Engineer</span>
          </p>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <div class="pre-text">
          <div className="flex ">
            <img src={Line} />
            <h6 className="ml-4">Courses to get your started</h6>
          </div>
          <h3>Software Engineer</h3>
        </div>

        <div class="List">
          <ul>
            <li
              id="most-btn"
              onClick={() => changeContent("most-btn", "tag1")}
              className={`List-item2 ${activeTag === "tag1" ? "active" : ""}`}
              style={{ marginLeft: "0px" }}
            >
              Most popular
            </li>
            <li
              className={`List-item2 ${activeTag === "tag2" ? "active" : ""}`}
              id="new-btn"
              onClick={() => changeContent("new-btn", "tag2")}
            >
              New
            </li>
            <li
              className={`List-item2 ${activeTag === "tag3" ? "active" : ""}`}
              id="bg-btn"
              onClick={() => changeContent("bg-btn", "tag3")}
            >
              Beginner Favorites
            </li>
          </ul>
        </div>
        <div id="content1" style={{ display: content === "Content 1" ? "block" : "none" }}>
          <div class="list_of_card_software">
            {cards.map((card, index) => (
              <Link to='/coursedetails' key={index}>
              <div className="card-new-updated hover:cursor-pointer relative">

                {/* Heart Icon */}
                <div
                  className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();  // 🛑 Prevents link navigation
                    e.preventDefault();   // 🛑 Prevents default <Link> behavior
                    toggleLike();         // ✅ Your like toggle function
                  }}
                >
                  {liked ? (
                    <FaHeart className="text-red-600" />
                  ) : (
                    <FaRegHeart className="text-red-600" />
                  )}
                </div>

                <img src={singlecoursepic1} className="card-new-img2" />
                <div className="techersec d-flex">
                  <div className="tech-img-sec">
                    <img src={techerpic} className="circled-techer-img2" />
                    <p className="nameoftecher">Ahmed Ali</p>
                  </div>
                </div>
                <div className="card-body-updated">
                  <h5 className="card-title-new2">Web designing Development</h5>
                  <p className="card-text-new2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <button className="card-new-btn2 hover:font-bold hover:bg-lime-600 bg-lime-500">Learn More</button>
                  <div className="pt-3">
                    <div className="lessons_number_new">
                      <div className="flex">
                        <img src={lessonicon} />
                        <p className="ml-2">10 Lessons</p>
                      </div>
                      <span className="price_btn_new">Price:<span>299$</span></span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>

            ))}

          </div>
          <div class="loadmoresec">
          <button className="font-semibold  py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
          Load More</button>
          </div>
        </div>
        <div id="content2" style={{ display: content === "Content 2" ? "block" : "none" }}>
          <div class="list_of_card_software">
            <Link to='/coursedetails'>
            <div className="card-new-updated hover:cursor-pointer relative">

              {/* Heart Icon */}
              <div
                className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();  // 🛑 Prevents link navigation
                  e.preventDefault();   // 🛑 Prevents default <Link> behavior
                  toggleLike();         // ✅ Your like toggle function
                }}
              >
                {liked ? (
                  <FaHeart className="text-red-600" />
                ) : (
                  <FaRegHeart className="text-red-600" />
                )}
              </div>

              <img src={singlecoursepic1} className="card-new-img2" />
              <div className="techersec d-flex">
                <div className="tech-img-sec">
                  <img src={techerpic} className="circled-techer-img2" />
                  <p className="nameoftecher">Ahmed Ali</p>
                </div>
              </div>
              <div className="card-body-updated">
                <h5 className="card-title-new2">Web designing Development</h5>
                <p className="card-text-new2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="card-new-btn2 hover:font-bold hover:bg-lime-600 bg-lime-500">Learn More</button>
                <div className="pt-3">
                  <div className="lessons_number_new">
                    <div className="flex">
                      <img src={lessonicon} />
                      <p className="ml-2">10 Lessons</p>
                    </div>
                    <span className="price_btn_new">Price:<span>299$</span></span>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
          <div class="loadmoresec">
          <button className="font-semibold  py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
          Load More</button>
          </div>
        </div>
        <div id="content3" style={{ display: content === "Content 3" ? "block" : "none" }}>
          <div class="list_of_card_software">
          <Link to='/coursedetails'>

            <div className="card-new-updated hover:cursor-pointer relative">

              {/* Heart Icon */}
              <div
                className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();  // 🛑 Prevents link navigation
                  e.preventDefault();   // 🛑 Prevents default <Link> behavior
                  toggleLike();         // ✅ Your like toggle function
                }}
              >
                {liked ? (
                  <FaHeart className="text-red-600" />
                ) : (
                  <FaRegHeart className="text-red-600" />
                )}
              </div>

              <img src={singlecoursepic1} className="card-new-img2" />
              <div className="techersec d-flex">
                <div className="tech-img-sec">
                  <img src={techerpic} className="circled-techer-img2" />
                  <p className="nameoftecher">Ahmed Ali</p>
                </div>
              </div>
              <div className="card-body-updated">
                <h5 className="card-title-new2">Web designing Development</h5>
                <p className="card-text-new2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="card-new-btn2 hover:font-bold hover:bg-lime-600 bg-lime-500">Learn More</button>
                <div className="pt-3">
                  <div className="lessons_number_new">
                    <div className="flex">
                      <img src={lessonicon} />
                      <p className="ml-2">10 Lessons</p>
                    </div>
                    <span className="price_btn_new">Price:<span>299$</span></span>
                  </div>
                </div>
              </div>
            </div>
            </Link>

          </div>
          <div class="loadmoresec">
          <button className="font-semibold  py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
          Load More</button>
          </div>
        </div>


      </div>
    </div>
  );
}
