import React from "react";
import "./topHeader.css";

import {
  FiTwitter,
  FiYoutube,
  FiInstagram,
  FiFacebook,
  FiVoicemail,
  FiPhoneIncoming,
} from "react-icons/fi";

export default function TopHeader() {
  return (
    <div className="main-container">
      <div className="topHeader main-margin ">
        <div className="quation">
          <p>Have Any Quation ?</p>
          <div className="contact-number">
            <FiPhoneIncoming />
            <p>+8801538088262</p>
          </div>
          <div className="email-acc">
            <FiVoicemail />
            <p>sasbulders@gmail.com</p>
          </div>
        </div>
        <div className="socila-icon">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
          <FiYoutube />
        </div>
      </div>
    </div>
  );
}
