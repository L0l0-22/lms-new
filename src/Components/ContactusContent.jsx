// import React, { useState } from 'react'
// import contact from "../assets/contact.png"
// import dots from "/webapps/lms_react/src/assets/dots.png"
// import form from "/webapps/lms_react/src/assets/form.png"
// import {  FiMinus, FiPhoneCall, FiPlus } from 'react-icons/fi'
// import { FaMapLocationDot } from 'react-icons/fa6'
// import { RiMailSendFill } from 'react-icons/ri'
// export default function Contact() {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const toggleAccordion = (index) => {
//       setActiveIndex(activeIndex === index ? null : index);
//     };
//     const accordionItems = [
//         {
//           title: "How can I Lorem Ipsum is simply dummy text?",
//           content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//         },
//         {
//           title: "Can you unmute Lorem Ipsum is dummy text?",
//           content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
//         },
//         {
//           title: "Where can I Lorem Ipsum is dummy text?",
//           content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
//         }
//       ];
//   return (
//     <>
//     {/* section1 */}
//     <div className="relative">
//         <img className="w-full h-auto object-cover" src={contact} alt="Contact" />

//         <div className="absolute inset-0 flex flex-col justify-center left-32">
//             <h1 className="text-4xl font-bold">Contact Us</h1>
//             <p className="text-lg"><span className='text-primaryBlue'>Home</span> / Contact Us</p>
//         </div>
//     </div>
//     {/* section2 */}
//     <div className=' bg-gray-100 '>
//         <div className='w-[90%] mx-auto py-20 '>
//         <div className="flex flex-col gap-8 items-center justify-center">
//         <div className="md:w-1/2 text-center">
//             <h1 className="text-3xl  font-bold text-[#1BDDAA] mb-4">Our Origins</h1>
//             <p className="text-gray-700 leading-relaxed ">
//             Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
//             Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s,
//             When An Unknown Printer. Lorem Ipsum Is Simply Dummy Text Of The Printing And
//             Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy.
//             </p>
//         </div>
//         <div className="flex flex-row justify-between items-center w-[80%]">
//         <div className="flex items-start gap-4 ml-10">
//         <div className="bg-gray/10 rounded-full p-2 flex items-center justify-center">
//         <FaMapLocationDot size={32} className="text-gray-700" />
//         </div>
//             <div>
//             <h2 className="text-xl font-semibold text-gray-800">Address</h2>
//             <p className=" text-gray-600">454 Read, Maadi, EGYPT</p>
//             </div>
//         </div>
//         <div className="flex items-start gap-4">
//         <div className="bg-[#1BDDAA] rounded-full p-2 flex items-center justify-center">
//         <FiPhoneCall size={32} className="text-white" />
//         </div>            <div>
//             <h2 className="text-xl font-semibold text-gray-800">Call Us Direct</h2>
//             <p className=" text-gray-600">+20 1112255522</p>
//             </div>
//         </div>
//         <div className="flex items-start gap-4">
//         <div className="bg-gray/10 rounded-full p-2 flex items-center justify-center">
//         <RiMailSendFill size={32} className="text-gray-700" />
//         </div>            <div>
//             <h2 className="text-xl font-semibold text-gray-800">Mail Address</h2>
//             <p className=" text-gray-600">Rak@org.com</p>
//             </div>
//         </div>
//         </div>
//         </div>

//         </div>
//     </div>
//     {/* section3 */}
//     <div className=" mx-auto mt-20 container mx-auto">
//   <div className="flex items-center space-x-2">
//     <hr className="w-12 border border-[#1BDDAA]" />
//     <p className="text-gray-700">What's updated now</p>
//   </div>
//   <h2 className="font-bold text-3xl text-gray-800">Have any questions? Get in touch</h2>

//   <div className='flex justify-between w-full mt-10'>
//     <img
//       src={form}
//       alt="Form Image"
//       className="w-52 h-auto"
//     />

//     <div className='bg-primaryBlue rounded-lg relative'>
//       <form action="#" className="space-y-7 w-[30rem] p-9 flex flex-col justify-between h-full">
//         <div>
//           <input 
//             type="text" 
//             id="name" 
//             className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" 
//             placeholder="Your Name" 
//             required 
//           />
//         </div>
//         <div>
//           <input 
//             type="email" 
//             id="email" 
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" 
//             placeholder="Your Email" 
//             required 
//           />
//         </div>
//         <div className="sm:col-span-2">
//           <textarea 
//             id="message" 
//             rows={6} 
//             className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" 
//             placeholder="Your Message" 
//             defaultValue={""} 
//           />
//         </div>
//         <div className='flex justify-end items-end'>
//         <button 
//                 type="submit" 
//                 className=" py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primaryGreen sm:w-fit hover:bg-green-800 "
//                 >
//                 Send Message
//                 </button>
//         </div>

//       </form>
//     </div>

//     <img
//       src={dots}
//       alt="Dots Image"
//       className="w-40 h-40"
//     />
//   </div>
//     </div>
// {/* section4 */}
//     <div className='flex flex-col justify-center align-center mt-20 text-center mx-auto'>
//     <h className="text-gray-800 font-bold text-3xl">Frequently asked questions</h>
//     <p className='text-gray-600 leading-relaxed text-lg mt-5'>You will find here the answers to the frequently asked question and our community<br/>
//     guidlines, that allow us to study in a motivating and secure environment</p>
//     <div className="w-[50%]  mx-auto mt-10">
//       {accordionItems.map((item, index) => (
//         <div key={index} className="border border-gray-300 rounded-lg mb-4">
//           <div
//             className="flex items-center justify-between p-4 cursor-pointer"
//             onClick={() => toggleAccordion(index)}
//           >
//             <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
//             {activeIndex === index ? (
//               <FiMinus size={18}/>
//             ) : (
//               <FiPlus size={18}/>
//             )}
//           </div>

//           {activeIndex === index && (
//             <div className="p-4 bg-gray-50 border-t border-gray-300">
//               <p className="text-sm text-gray-600">{item.content}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//     </div>
//     </>  
// )
// }



import React, { useEffect, useState } from "react";
import contactusbanner from "/webapps/lms_react/src/assets/Group 200.png";
import icon from "/webapps/lms_react/src/assets/Icon.png";
import icon2 from "/webapps/lms_react/src/assets/Icon2.png";
import icon3 from "/webapps/lms_react/src/assets/Icon3.png";
import mob20 from "/webapps/lms_react/src/assets/Group 199.png";
import '/webapps/lms_react/src/styles/Contactus.css'
import { Link } from "react-router-dom";
import dots from "/webapps/lms_react/src/assets/dots.png"
import form from "/webapps/lms_react/src/assets/form.png"
import { FiMinus, FiPhoneCall, FiPlus } from 'react-icons/fi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { RiMailSendFill } from 'react-icons/ri'
export default function Contactus() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {

    setActiveIndex(activeIndex === index ? null : index);
  };
  const accordionItems = [
    {
      title: "How can I Lorem Ipsum is simply dummy text?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Can you unmute Lorem Ipsum is dummy text?",
      content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      title: "Where can I Lorem Ipsum is dummy text?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];


  return (


    <div>

      <div className="banner-container pt-5">
        <picture>
          <source className="imgcontactus" media="(max-width:767px)" srcset={mob20} />
          <source className="imgcontactus" src={mob20} media="(min-width: 768px) and (max-width: 1023px)" />
          <source media="(min-width: 1024px)" src={contactusbanner} />
          <img className="imgcontactus" src={contactusbanner} />
          <img className="imgmob" src={mob20} />

        </picture>
        <div className=" container mx-auto px-4 overlay-text-bg2">
          <h2>Contact us</h2>
          <p><Link to="/" style={{ textDecoration: "none" }}>
            Home </Link><span>/ Contact Us</span>
          </p>
        </div>
      </div>

      <div class="wrap">
        <div class="container mx-auto">
          <div class="text-part ">
            <h6>Our origins</h6>
            <p className="px-4">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry <br />. Lorem Ipsum Has Been The Industry’s Standard
              Dummy Text Ever Since The 1500S, When An <br /> Unknown Printer.
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry
              <br /> . Lorem Ipsum Has Been The Industry’s Standard Dummy.
            </p>
          </div>
          <div class="card-container">
            <div class="card20 mb-3">
              <div className="flexing-contact">
                <div class="img-container">
                  <img src={icon} class="icon-margin" alt="..." />
                </div>
                <div class="card20-body">
                  <h5 class="card20-title">Address</h5>
                  <p class="card20-text">454 read, Maadi, EGYPT</p>
                </div>
              </div>
            </div>
            <div class="card20 mb-3">
              <div className="flexing-contact">
                <div class="img-container">
                  <img src={icon2} class="icon-margin" alt="..." />
                </div>
                <div class="card20-body">
                  <h5 class="card20-title">Call Us Direct</h5>
                  <p class="card20-text">+20 1112255522</p>
                </div>
              </div>
            </div>
            <div class="card20 mb-3">
              <div className="flexing-contact">
                <div class="img-container">
                  <img src={icon3} class="icon-margin" alt="..." />
                </div>
                <div class="card20-body">
                  <h5 class="card20-title">Mail Address</h5>
                  <p class="card20-text">Rak@org.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 px-4">
        <div className="flex items-center space-x-2">
          <hr className="w-12 border border-[#1BDDAA]" />
          <p className="text-gray-700">What's updated now</p>
        </div>

        <h2 className="font-bold text-3xl text-gray-800 mt-4">
          Have any questions? Get in touch
        </h2>

        <div className="flex flex-col lg:flex-row justify-between w-full mt-10 gap-6">
          {/* Left image */}
          <img
            src={form}
            alt="Form Image"
            className="w-40 h-auto mx-auto lg:mx-0"
          />

          {/* Form */}
          <div className="bg-primaryBlue rounded-lg w-full lg:w-[30rem] p-6">
            <form className="space-y-6 w-full">
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                id="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                placeholder="Your Email"
                required
              />
              <textarea
                id="message"
                rows={5}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm max-h-[200px]"
                placeholder="Your Message"
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right image */}
          <img
            src={dots}
            alt="Dots Image"
            className="w-28 h-28 mx-auto lg:mx-0"
          />
        </div>
      </div>


      <div className="flex flex-col justify-center items-center mt-20 text-center px-4">
        <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 leading-relaxed text-base sm:text-lg mt-5">
          You will find here the answers to the frequently asked questions and our community<br />
          guidelines that allow us to study in a motivating and secure environment.
        </p>

        <div className="w-full max-w-2xl mt-10">
          {accordionItems.map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-lg mb-4">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="font-semibold text-base sm:text-lg text-gray-800">{item.title}</h3>
                {activeIndex === index ? <FiMinus size={18} /> : <FiPlus size={18} />}
              </div>

              {activeIndex === index && (
                <div className="p-4 bg-gray-50 border-t border-gray-300">
                  <p className="text-sm text-gray-600">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
