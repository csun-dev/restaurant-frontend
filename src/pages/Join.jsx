import Header from "./components/Header";
import React from "react";
import "../css/pages/join.css";

const SignUp = () => {

  return (
    <>
      <Header />
      <div className='signUp-join-container'> 
        <div className="signUp-join-header"> 
          <div className="signUp-text">Join Matador Rewards!</div> 
          <div className="signUp-underline"></div> 
        </div>
        <div className="signUp-join-inputs"> 
          <div className="signUp-join-input"> 
            <img className="signUp-person" src="https://icons.veryicon.com/png/o/internet--web/website-blog-utility-icon/personal-center-human-shape.png" alt="" /> 
            <input type="text" placeholder="Name" />
          </div>
          <div className="signUp-input"> 
            <img className="signUp-email" src="https://cdn.iconscout.com/icon/free/png-256/free-email-2026367-1713640.png" alt="" /> 
            <input type="email" placeholder="Email" />
          </div>
          <div className="signUp-input"> 
            <img className="signUp-password1" src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png" alt="" /> 
            <input type="password" placeholder="Password" />
          </div>
          <div className="signUp-input"> 
            <img className="signUp-password2" src="https://icons.veryicon.com/png/o/internet--web/sesame-treasure/login-password-3.png" alt="" /> 
            <input type="password" placeholder="Confirm Password" />
          </div>
        </div>
        <div className="signUp-alr-have">Already have an account?<span> Click Here!</span></div> 
        <div className="signUp-agreement-checkbox"> 
          <input type="checkbox" id="agreeToTerms" required />
          <label htmlFor="agreeToTerms">I agree to the Terms and Conditions</label>
        </div>
        <div className="signUp-text-checkbox"> 
          <input type="checkbox" id="text" required />
          <label htmlFor="text">Receive text offers and promotions?</label>
        </div>
        <div className="signUp-join"> 
          <div className="signUp-joinBut">Join Now!</div> 
        </div>
      </div>
    </>
  )
}

export default SignUp;
