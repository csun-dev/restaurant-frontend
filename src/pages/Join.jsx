import Header from "./components/Header";
import React from "react";
import "../css/pages/join.css";

const Join = () => {

  return (
    <>
      <Header />
      <div className='signup-join-container'> 
        <div className="signup-join-header"> 
          <div className="signup-text">Join Matador Rewards!</div> 
          <div className="signup-underline"></div> 
        </div>
        <div className="signup-join-inputs"> 
          <div className="signup-join-input"> 
            <img className="signup-person" src="https://icons.veryicon.com/png/o/internet--web/website-blog-utility-icon/personal-center-human-shape.png" alt="" /> 
            <input type="text" placeholder="Name" />
          </div>
          <div className="signup-input"> 
            <img className="signup-email" src="https://cdn.iconscout.com/icon/free/png-256/free-email-2026367-1713640.png" alt="" /> 
            <input type="email" placeholder="Email" />
          </div>
          <div className="signup-input"> 
            <img className="signup-password1" src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png" alt="" /> 
            <input type="password" placeholder="Password" />
          </div>
          <div className="signup-input"> 
            <img className="signup-password2" src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png" alt="" /> 
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>
        <div className="signup-alr-have">Already have an account?<span> Click Here!</span></div> 
        <div className="signup-agreement-checkbox"> 
          <input type="checkbox" id="agreeToTerms" required />
          <label htmlFor="agreeToTerms">I agree to the Terms and Conditions</label>
        </div>
        <div className="signup-text-checkbox"> 
          <input type="checkbox" id="text" required />
          <label htmlFor="text">Receive text offers and promotions?</label>
        </div>
        <div className="signup-join"> 
          <div className="signup-joinBut">Join Now!</div> 
        </div>
      </div>
    </>
  )
}

export default Join;
