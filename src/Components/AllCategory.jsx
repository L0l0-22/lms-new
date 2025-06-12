import React, { useState } from 'react'
import '/webapps/lms_react/src/styles/HomeStyle/AllCategory.css'
import singlecoursepic1 from "/webapps/lms_react/src/assets/Mask Group 37@2x.png";
import techerpic from "/webapps/lms_react/src/assets/pic3.png";
import lessonicon from "/webapps/lms_react/src/assets/Icon awesome-book-open.png";
import mob from "/webapps/lms_react/src/assets/mobviewforsoftware.png";
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function AllCategory() {
  const [likedItems, setLikedItems] = useState({});
  const [content, setContent] = useState("AllContent");
  const [activeTag, setActiveTag] = useState("tag1");
  const changeContent = (id, tagname) => {
    switch (id) {
      case "all-btn":
        setContent("AllContent");
        break;
      case "science-btn":
        setContent("ScienceContent");
        break;
      case "design-btn":
        setContent("DesignContent");
        break;
      case "food-btn":
        setContent("FoodContent");
        break;
      case "tech-btn":
        setContent("TechContent");
        break;
      case "music-btn":
        setContent("MusicContent");
        break;
      case "medicine-btn":
        setContent("MedicineContent");
        break;

      default:
        setContent("");
        break;
    }
    setActiveTag(tagname);
  };
  return (
    <div className="container mx-auto">
      <div className="Allcategory-titles-sec">
        <h6 className="course-section-title">COURSES</h6>

        <h5 className="course-section-title2">Popular Subjects</h5>
      </div>
      <div className="menu-list mx-3">
        <ul className="menu-tabs">
          <li
            onClick={() => changeContent("all-btn", "tag1")}
            className={`tab-item ${activeTag === "tag1" ? "active" : ""}`}
          >
            <button className="tab-button">All</button>
          </li>
          <li
            onClick={() => changeContent("science-btn", "tag2")}
            className={`tab-item ${activeTag === "tag2" ? "active" : ""}`}
          >
            <a className="tab-button">Science</a>
          </li>
          <li
            onClick={() => changeContent("design-btn", "tag3")}
            className={`tab-item ${activeTag === "tag3" ? "active" : ""}`}
          >
            <a className="tab-button">Design</a>
          </li>
          <li
            onClick={() => changeContent("food-btn", "tag4")}
            className={`tab-item ${activeTag === "tag4" ? "active" : ""}`}
          >
            <a className="tab-button">Food</a>
          </li>
          <li
            onClick={() => changeContent("tech-btn", "tag5")}
            className={`tab-item ${activeTag === "tag5" ? "active" : ""}`}
          >
            <a className="tab-button">Tech</a>
          </li>
          <li
            onClick={() => changeContent("music-btn", "tag6")}
            className={`tab-item ${activeTag === "tag6" ? "active" : ""}`}
          >
            <a className="tab-button">Music</a>
          </li>
          <li
            onClick={() => changeContent("medicine-btn", "tag7")}
            className={`tab-item ${activeTag === "tag7" ? "active" : ""}`}
          >
            <a className="tab-button">Medicine</a>
          </li>
        </ul>
      </div>

      <div id="content1" style={{ display: content === "AllContent" ? "block" : "none" }}>

        <div className="list_of_card_software mx-5">
          <Link to="/coursedetails" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="card-new-updated hover:cursor-pointer relative">

              {/* Heart Icon */}
              <div
              className="absolute top-1 text-lg right-2 text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setLikedItems(prev => ({
                  ...prev,
                  card4: !prev.card4,
                }));
              }}
            >
              {likedItems.card4 ? (
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
          <Link to="/coursedetails" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="card-new-updated hover:cursor-pointer relative">

              {/* Heart Icon */}
              <div
                className="absolute top-1 text-lg right-2 text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setLikedItems(prev => ({
                    ...prev,
                    card1: !prev.card1,
                  }));
                }}
              >
                {likedItems.card1 ? (
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
          <Link to="/coursedetails" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="card-new-updated hover:cursor-pointer relative">

              {/* Heart Icon */}
              <div
              className="absolute top-1 text-lg right-2 text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setLikedItems(prev => ({
                  ...prev,
                  card2: !prev.card2,
                }));
              }}
            >
              {likedItems.card2 ? (
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
          <Link to="/coursedetails" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="card-new-updated hover:cursor-pointer relative">

              {/* Heart Icon */}
              <div
              className="absolute top-1 text-lg right-2 text-gray-500 hover:text-red-600 cursor-pointer z-10 p-2 bg-red-100 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setLikedItems(prev => ({
                  ...prev,
                  card3: !prev.card3,
                }));
              }}
            >
              {likedItems.card3 ? (
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
        <div class="loadmore-btn flex justify-center pb-5">
          <Link to='/courses'>
          <button className="font-semibold py-2 px-4 text-white bg-primaryBlue rounded-md hover:bg-[#007bbd] transition duration-300">
          Load more</button></Link>
        </div>
      </div>

    </div>

  )
}
