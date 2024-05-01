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
=======
import fbICON from "../../images/fbICON.png";
import twitICON from "../../images/twitICON.png";
import instaICON from "../../images/instaICON.png";
import linkICON from "../../images/linkICON.png";


const Footer  = () => {
  return(
    <footer className = "footer">
      <div className = "container-main">

          <div className="about">
            <h6>About</h6>
            <p className="about-text">
            At our family-owned pizzeria, we blend generations of culinary tradition with a passion for mouthwatering pizzas, creating a gathering place where friends and family savor delicious food and create lasting memories. With our commitment to using only the freshest ingredients and time-honored recipes, each bite of our handcrafted pizzas tells a story of love and dedication, welcoming you to a taste of home.</p>
          </div>
    
          <div className="locations">
            <h6>Locations</h6>
            <ul className="footer-links">
              <li><a href="">Burbank</a></li>
              <li><a href="">Los Angeles</a></li>
              <li><a href="">Moscow</a></li>
              <li><a href="">Springfield</a></li>
              <li><a href="">Rhode Island</a></li>
              <li><a href="">Bikini Bottom</a></li>
            </ul>
          </div>
          <div className="quick-links">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Sitemap</a></li>
              <li><a href="">Terms of Use</a></li>
            </ul>
          </div>
      </div>
      <div className="container-bot">
          <div className="copyright">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by  
              <a href="#">  Yo MAMA</a>.
            </p>
          </div>
    
          <div className="social-icons-class">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><img className= "fbIMG" src = {fbICON} alt = "Facebook" width = "30" height = "30"/></a></li>
              <li><a className="twitter" href="#"><img className= "twitIMG" src = {twitICON} alt = "Twitter" width = "30" height = "30"/></a></li>
              <li><a className="instagram" href="#"><img className= "instaIMG" src = {instaICON} alt = "Instagram" width = "30" height = "30" /></a></li>
              <li><a className="linkedin" href="#"><img className= "linkIMG" src = {linkICON} alt = "Linkedin" width = "30" height = "30"/> </a></li>
            </ul>
          </div>
      </div>
    </footer>
  );
};
export default Footer;

