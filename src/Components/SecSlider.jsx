import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import teacher from "../assets/teacher.jpg";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-1/2 -translate-x-[120%] md:right-96 lg:right-32 md:left-auto -bottom-16 transform bg-[#E6E5F3] text-white p-2 rounded-full z-10 hover:bg-purple-200"
    >
        <MdKeyboardArrowLeft size={30} className="text-primaryBlue text-5xl" />
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-1/2 translate-x-[20%] md:right-96 lg:right-32 md:left-auto -bottom-16 transform bg-[#E6E5F3] text-white p-2 rounded-full z-10 hover:bg-purple-200"
    >
        <MdOutlineKeyboardArrowRight size={30} className="text-primaryBlue text-5xl" />
    </button>
);


const SecSlider = () => {
    const settings = {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2200,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1.5 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1.5 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="w-full mt-10 mx-auto relative pb-10">



            <Slider {...settings}>
                <div className="px-2">
                    <div className="lg:h-[500px] h-auto  rounded-lg bg-[#9ebe5a]">
                        <div className="p-5 space-y-12">
                            <FaQuoteLeft size={48} className="text-white mb-3 " />
                            <p className="text-white leading-relaxed lg:text-lg ">Lorem Ipsum is simply dummy text of the printing and" typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ".industry's standard dummy</p>
                            <div className="flex space-x-2">
                                <img
                                    src={teacher}
                                    alt="Teacher Profile"
                                    className="w-20 h-20 rounded-full"
                                />
                                <div className="text-white mt-3">
                                    <h3 className="font-bold text-2xl">Shady Abdullah</h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="h-auto lg:h-[500px] rounded-lg bg-[#50c4ee]">
                        <div className="p-5 space-y-12">
                            <FaQuoteLeft size={48} className="text-white mb-3 " />
                            <p className="text-white leading-relaxed lg:text-lg ">Lorem Ipsum is simply dummy text of the printing and" typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ".industry's standard dummy</p>
                            <div className="flex space-x-2">
                                <img
                                    src={teacher}
                                    alt="Teacher Profile"
                                    className="w-20 h-20 rounded-full"
                                />
                                <div className="text-white mt-3">
                                    <h3 className="font-bold text-2xl">Shady Abdullah</h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="h-auto lg:h-[500px]  rounded-lg bg-[#9ebe5a]">
                        <div className="p-5 space-y-12">
                            <FaQuoteLeft size={48} className="text-white mb-3 " />
                            <p className="text-white leading-relaxed lg:text-lg ">Lorem Ipsum is simply dummy text of the printing and" typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ".industry's standard dummy</p>
                            <div className="flex space-x-2">
                                <img
                                    src={teacher}
                                    alt="Teacher Profile"
                                    className="w-20 h-20 rounded-full"
                                />
                                <div className="text-white mt-3">
                                    <h3 className="font-bold text-2xl">Shady Abdullah</h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-2">
                    <div className="h-auto lg:h-[500px]  rounded-lg bg-[#50c4ee]">
                        <div className="p-5 space-y-12">
                            <FaQuoteLeft size={48} className="text-white mb-3 " />
                            <p className="text-white leading-relaxed lg:text-lg ">Lorem Ipsum is simply dummy text of the printing and" typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ".industry's standard dummy</p>
                            <div className="flex space-x-2">
                                <img
                                    src={teacher}
                                    alt="Teacher Profile"
                                    className="w-20 h-20 rounded-full"
                                />
                                <div className="text-white mt-3">
                                    <h3 className="font-bold text-2xl">Shady Abdullah</h3>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>


        </div>
    );
};

export default SecSlider;