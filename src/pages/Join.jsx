import Header from "./components/Header";
import React, { useState } from "react";
import "../css/pages/join.css";

const Join = () => {

  return (
    <>
      <Header />
      <div className='join-box'>
        <div className="sub-header">
          <div className="text">Join Matador Rewards!</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img className="person" src="https://icons.veryicon.com/png/o/internet--web/website-blog-utility-icon/personal-center-human-shape.png" alt="" />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input">
            <img className="email" src="https://cdn.iconscout.com/icon/free/png-256/free-email-2026367-1713640.png" alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img className="password1" src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png" alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="input">
            <img className="password2" src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png" alt="" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>
        <div className="alr-have">Already have an account?<span> Click Here!</span></div>
        <div className="agreement-checkbox">
          <input type="checkbox" id="agreeToTerms" required />
          <label htmlFor="agreeToTerms">I agree to the Terms and Conditions</label>
        </div>
        <div className="text-checkbox">
          <input type="checkbox" id="text" required />
          <label htmlFor="text">Recieve text offers and promotions?</label>
        </div>
        <div className="join">
          <div className="joinBut">Join Now!</div>
        </div>
      </div>
    </>
  )
}

export default Join;
