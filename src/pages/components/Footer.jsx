import "../../css/components/footer.css";
import twitter from "../../images/twitter.svg"
import youtube from "../../images/youtube.svg"
import instagram from "../../images/instagram.svg"
import linkedin from "../../images/linkedin.svg"
const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="main-content">
          <ul className="main-outer">
            <h2>SHOP</h2>
            <ul>
              <li>Apparel & Acessories</li>
              <li>Locate Stores</li>
              <li>Check Order Status</li>
            </ul>
          </ul>
          <ul className="main-outer">
            <h2>CONNECT</h2>
            <ul>
              <li>Contact Us</li>
              <li>Affiliations</li>
              <li>Pizza Newsletter</li>
              <li>Customer Service</li>
            </ul>
          </ul>
          <ul className="main-outer">
            <h2>CORPORATE</h2>
            <ul>
              <li>Mission</li>
              <li>Carrers</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </ul>
        </div>
        <div className="sub-content">
          <h3>©️2024 Pizza Corportion, USA. All rights reserved</h3>
          <ul className="social-icons">
            <li><a href = "#"><img src = {twitter} width  = "40px" height= "40px" /></a></li>
            <li><a href = "#"><img src = {instagram} width  = "40px" height= "40px" /></a></li>
            <li><a href = "#"><img src = {linkedin} width  = "40px" height= "40px" /></a></li>
            <li><a href = "#"><img src = {youtube} width  = "40px" height= "40px" /></a></li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default footer;