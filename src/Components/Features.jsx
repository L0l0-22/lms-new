import React from 'react';
import { motion } from 'framer-motion';
import bag from "/webapps/lms_react/src/assets/Group 19.svg";
import paper from "/webapps/lms_react/src/assets/Group 18.svg";
import card2 from "/webapps/lms_react/src/assets/222.png";
import '/webapps/lms_react/src/styles/HomeStyle/Features.css';

export default function Features() {
  return (
    <div className="whole-container-features">
      <motion.div
        className="flexing-features-data"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="colums-data"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h6 className="card-title-1">FEATURES</h6>
          <h4 className="card-title-2">Premium Courses</h4>
          <h5 className="card-title-3">Lifts the Dummy text</h5>
          <p className="card-par">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry Lorem Ipsum.
          </p>



          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
          >            <motion.div
            className="contact-info-item"
            whileHover={{ scale: 1.05 }}
          >
              <div className="contact-info-icon">
                <img src={bag} alt="Bag icon" />
              </div>
              <div className="contact-info-content">
                <h4>Free Support</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="contact-info-icon">
                <img src={paper} alt="Paper icon" />
              </div>
              <div className="contact-info-content">
                <h4>Big Bonuses</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

        <motion.div
          className="flexing-features-data"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}  // same animation
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >


          <img className="card-photo2" src={card2} alt="Card image cap" />
        </motion.div>
      </motion.div>
    </div>
  );
}
