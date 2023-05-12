import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to Aashi Book Point, a literary haven where words weave
            magic and stories come alive. With its vast collection of books
            spanning genres and a dedicated staff passionate about literature,
            Aashi Book Point is your doorway to endless reading adventures.
            Discover, explore, and let your imagination soar within our walls,
            as we celebrate the power of books and the joy of reading.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              B-317, Kalindi Gold City, Indore, MP (453555)
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 8085657070</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: team@abstore.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">School</span>
          <span className="text">College</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            Aashi Book Point 2023 CREATED BY Harsh Kalmegh. PREMIUM E-COMMERCE
            SOLUTIONS.
          </span>
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
