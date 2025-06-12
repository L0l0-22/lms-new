import React, { useEffect } from "react";
import "./style/footer.css";
import navlogo from '/home/user/my-app/src/assets/Go Smart-02.png';
import google from '/home/user/my-app/src/assets/google.svg'
import linkedin from '/home/user/my-app/src/assets/linkedin.svg'
import facebook from '/home/user/my-app/src/assets/facebook.svg'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll, scroller } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';




export default function Footer() {


  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);




  
  return (


    <footer id="footer"  >
      <div class=" pt-5 pb-5 footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-12 about-company">
              <img src={navlogo} alt="" />
              <p class="pt-3 footer-left-text">Go Smart is committed to ensuring digital accessibility for individuals
                with disabilities </p>
              <p class="footer-left-text">We are continuously working to improve the accessibility of our web experience
                for everyone, and we welcome feedback and accommodation requests.</p>


            </div>
            <div class="footer-list-div col-md-2 col-4 links">
              <ul class="footer-list p-0 " >
                <ScrollLink
                  to="banner"
                  smooth={true}
                  duration={500}
                >
                  <li>

                    <Link to="/">Home</Link>


                  </li>
                </ScrollLink>

                <ScrollLink to="footer" smooth={true} duration={500}>

                  <li>

                    <a href="">About us</a>


                  </li>
                </ScrollLink>


              </ul>
            </div>
            <div class="footer-list-div col-md-3 col-4 links" >
              <ul class="footer-list p-0 " >
                <ScrollLink to="application"
                  smooth={true}
                  duration={400}>
                  <li>
                  <HashLink to={"/#application"}>Application</HashLink>                  </li>
                </ScrollLink>

                <ScrollLink to="techscroll"
                  smooth={true}
                  duration={500}>
                  <li>

                    <HashLink   to={"/#techscroll"}  >Technologies</HashLink>
                  </li>

                </ScrollLink>
              </ul>
            </div>
            <div class="footer-list-div col-md-2 col-4 links" style={{ paddingRight: "0px" }}>
              <ul class="footer-list p-0 ">

                <ScrollLink to="ourprojects"
                  smooth={true}
                  duration={500}>
                  <li>
                    <HashLink to={"/#ourprojects"}  >Our Projects</HashLink>


                  </li>
                </ScrollLink>
                <li>
                  <Link to="/contactus"> Contact us</Link>

                </li>

              </ul>
            </div>


          </div>
          <div class="last-section row mt-0">
            <div class="left-section col-sm-6 copyright">
              <p >2024 © Go Smart
              </p>

            </div>


            <div class="social-section col-sm-6 copyright">

              <a class="social-icon"><img src={google} alt="some image" /></a>
              <a class="social-icon"><img src={linkedin} alt="" /></a>
              <a class="social-icon"><img src={facebook} alt="" /></a>



            </div>



          </div>
        </div>
      </div>
    </footer>

  )

}