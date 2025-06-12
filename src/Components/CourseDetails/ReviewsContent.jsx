import { useState } from "react";
import stars from "../../assets/Vector.svg";
import writereview from "../../assets/writereview.png";
import reviewpic from "../../assets/Rectangle 30187.png";
import { IoMdClose } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";

export default function ReviewsContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [model2, setModel2] = useState(false); 
  const [rating, setRating] = useState(0); 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toggleModel2 = () => setModel2(!model2);
  const handleClick = (index) => setRating(index + 1); 
  const reviews = [
    {
      id: 1,
      name: "Shady Abdo",
      rating: 5,
      title: "Amazing Course!",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imgSrc: reviewpic,
    },
    {
      id: 2,
      name: "John Doe",
      rating: 4,
      title: "Great Course!",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      imgSrc: reviewpic,
    },
    {
      id: 3,
      name: "Jane Smith",
      rating: 3,
      title: "Good, but could be better",
      text: "The course is good but lacks some details that I was hoping for.",
      imgSrc: reviewpic,
    },
    {
      id: 4,
      name: "Mark Taylor",
      rating: 2,
      title: "Not what I expected",
      text: "I expected more advanced content. It feels very basic for the price.",
      imgSrc: reviewpic,
    },
  ];
  const filteredReviews =
    activeFilter === "All"
      ? reviews
      : reviews.filter((review) => review.rating === parseInt(activeFilter));

      const handleSubmitReview = () => {
        setIsSubmitted(true);
      
        setTimeout(() => {
          setIsSubmitted(false);
          setModel2(false);
        }, 2000);
      };
      
      
      
  return (
    <div id="content3">
      {/*  summary  */}
      <div className="flex flex-col md:flex-row space-x-8 my-8 mr-9">
        <div className="">
          <div className="card111 mb-3">
            <div className="flex items-center gap-4">
              <div className="bg-rating px-2 py-1 rounded">
                <span>4.7</span>
              </div>
              <div>
                <div className="stars flex gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <img src={stars} alt="star" key={idx} />
                  ))}
                </div>
                <p className="card111-text text-sm text-gray-600 mt-1">
                  From 1.5 Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[3%]">
          {["5", "4", "3", "2", "1"].map((star, index) => (
            <div className="review-bar flex items-center mb-2" key={index}>
              <img src={stars} alt="star" className="w-6 h-6" />
              <span>{star}</span>
              <div className="bar bg-gray-200 flex-1 h-2 rounded mx-2">
                <div className="fill bg-yellow-500 h-full w-[60%] rounded"></div>
              </div>
              <div className="reviews text-sm text-gray-600">60%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter  */}
      <div className="review-list mb-6 rounded-lg px-4">
        <ul className="space-y-2">
          {["All", "5", "4", "3", "2", "1"].map((label) => (
            <li className="List-item1" key={label}>
              <button
                className={` font-semibold ${activeFilter === label ? "font-bold text-[#0a7ba1] bg-gray-100" : ""} hover:bg-gray-50 px-2 rounded-md hover:text-[#0a7ba1] text-primaryBlue`}
                onClick={() => setActiveFilter(label)}
              >
                {label === "All" ? "All" : `${label} Stars`}
              </button>
            </li>
          ))}
        </ul>
      </div>

           {/* Filtered Reviews  */}
           <div className="mb-3" id="all-review-content">
        {filteredReviews.length === 0 ? (
          <div className="text-center text-gray-500 py-4">
            No reviews found for this rating.
          </div>
        ) : (
        filteredReviews.map((review) => (
          <div className="single-review-container mt-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm" key={review.id}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-5/12">
                <div className="card111">
                  <div className="flex space-x-4">
                    <div className="w-1/4 pt-2">
                      <img src={review.imgSrc} className="review-img w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" alt="Review" />
                    </div>
                    <div className="w-3/4 firstcardcontent">
                      <div className="card111-body">
                        <p className="card111-text font-medium">{review.name}</p>
                        <div className="stars flex mt-1">
                          {[...Array(review.rating)].map((_, idx) => (
                            <img src={stars} key={idx} alt="star" className="w-3 h-3 sm:w-4 sm:h-4" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-7/12 right-review-content">
                <span className="font-medium text-sm sm:text-base">{review.title}</span>
                <p className="text-sm sm:text-base mt-1 text-gray-600">{review.text}</p>
                <button className="p-2 border border-primaryBlue text-primaryBlue flex items-center rounded-md mt-2">
                <GoHeartFill size={20} className="mr-3" />
                  Like
                </button>
              </div>
            </div>
          </div>
          ))
        )}
      </div>

      {/* write review */}
      <div className="w-[40%] mx-auto">
      <button 
        onClick={toggleModel2}
      className="w-full p-3 bg-primaryGreen text-white rounded-md  hover:bg-[#76c13f] text-lg ">
      Write a Review
      </button>
      </div>
      {model2 && (
        <div className="model2">
          <div className="overlay2"></div>
          <div className="model-content2">
            {isSubmitted ? (
              <div className="flex flex-col justify-center items-center h-60">
                <BsCheck2Circle size={64} className="text-green-500 mb-4" />
                <p className="text-lg font-semibold text-green-600">Review Submitted!</p>
              </div>
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <img src={writereview} alt="Write Review" />
                </div>
                <p className="text-3xl font-medium">Your Review</p>
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={index < rating ? "star filled" : "star"}
                      onClick={() => handleClick(index)}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <div className="review-text-sec">
                  <h5>Write a Review</h5>
                  <form>
                    <div className="my-4">
                      <textarea
                        className="form-control w-full px-3 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <button onClick={handleSubmitReview} className="submit-review-btn">
                  Submit Review
                </button>
              </>
            )}
            <button className="close-model2 " onClick={toggleModel2}>
              <IoMdClose size={30} />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
