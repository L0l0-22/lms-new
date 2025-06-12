import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "/webapps/lms_react/src/styles/HomeStyle/MainSlider.css";
import { Link } from 'react-router-dom';
import combinedshape from '/webapps/lms_react/src/assets/Combined Shape.png'
export default function Firstslider() {
  const cards = [
    { title: "Learn Object-Oriented Programming with PHP", instructor: "Shady Amr", price: "$299", link: "/coursedetails" },
    { title: "Master JavaScript for Web Development", instructor: "John Doe", price: "$199", link: "/coursedetails" },
    { title: "Python for Data Science", instructor: "Jane Smith", price: "$249", link: "/coursedetails" },
    { title: "React.js for Beginners", instructor: "Bob White", price: "$179", link: "/coursedetails" },
    { title: "Web Development Bootcamp", instructor: "Alice Brown", price: "$399", link: "/coursedetails" }
  ];

  return (
    <div class="container-fluid first-section"style={{zIndex:"-1"}}  >
          <img className='combinedshape' src={combinedshape}style={{zIndex:"1"}}/>

      <div className="container mx-auto pt-2">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          spaceBetween={50}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper custom-swiper pb-5"
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 50
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50
            },
            1024: {
              slidesPerView: 1.40,
              spaceBetween: 150
            }
          }}
        >
          {cards.slice(0, 5).map((card, index) => (
            <SwiperSlide key={index} className='centerslide'>
              <Link to={card.link} style={{ textDecorationLine: "none" }}>
                <div className="card15">
                  <div className="card-category5">
                    {/* <p>SCIENCE</p> */}
                  </div>
                  <div className="card15-body">
                    <h5 className="card15-title">{card.title}</h5>
                    <p className="card15-text">{card.instructor}</p>
                    <button className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded" >{card.price}</button>

                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
