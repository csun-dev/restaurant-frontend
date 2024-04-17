import Header from "./components/Header";
import Footer from "./components/Footer";
import "../css/pages/home.css";
import mainimg from "../images/matadorslice.png";
import toppizza from "../images/toppizzas.png";
import pizzaplace from "../images/pizzaplace.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home__welcome">
          <img
            src={mainimg}
            className="home-main-img"
          />
          <span className="home-welcome-txt">Welcome to CSUN Pizzeria</span>
        </div>
        <div className="home_line--container">
          <div className="home__content--format">
            <span className="home__hours--title">Hours of Operation</span>
            <div className="home__hours--location--wrapper">
              <span className="home__hours--locations">
                Downtown LA - 9:00 AM to 10:00PM Monday thru Saturday
              </span>
              <span className="home__hours--locations">
                Northridge - 9:00 AM to 10:00 PM Monday thru Saturday
              </span>
              <span className="home__hours--locations">
                Simi Valley - 9:00 AM to 10:00 PM Monday thru Saturday
              </span>
            </div>
          </div>
          <img
            src={pizzaplace}
            className="home__image--format"
          />
        </div>
        <div className="home_line--container">
          <img
            src={toppizza}
            className="home__image--format"
          />
          <div className="home__content--format">
            <span className="home-top-picks--title">Top 3 Pizzas</span>
            <div className="home-top-picks--wrapper">
              <span className="home-top-picks--details">
                Left - Magherita Pizza
               </span>
              <span className="home-top-picks--details">
                Middle - Hawaiian Pizza
               </span>
               <span className="home-top-picks--details">
                Right - Pepperoni Pizza
               </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;