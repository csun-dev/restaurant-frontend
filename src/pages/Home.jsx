import Header from "./components/Header";
import "../css/pages/home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home__welcome">
          <img
            src="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Healthy-Homemade-Spinach-Pizza-with-Cheese.jpg"
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
            alt="image"
            src="https://www.medibank.com.au/content/dam/livebetter/en/images/migrated/41f5d31634e6a83e2895afe1aca7003d/how-to-make-better-pizza.jpg"
            className="home__image--format"
          />
        </div>
        <div className="home_line--container">
          <img
            alt="image"
            src="https://media.istockphoto.com/id/1313418058/photo/vegetarian-dishes.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=Xi3-TTVD0xH3K4Vuf24-Kp_NAaBmLgLMUyYbcomECxg="
            className="home__image--format"
          />
          <div className="home__content--format">
            <span className="home-not-sure">Not sure what to put here</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
