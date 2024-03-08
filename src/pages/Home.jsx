import Header from "./components/Header";
import "../css/components/home.css";

const Home = () => {
  return (
    <>
      <Header />
      <h1>Home Content</h1>
      <div className="home-container">
      <img
        alt="image"
        src="https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Healthy-Homemade-Spinach-Pizza-with-Cheese.jpg"
        className="home-main-img"
      />
      <span className="home-welcome-txt">Welcome to CSUN Pizzeria</span>
      <span className="home-hours-txt">
        <span className="home-text">Hours of Operation</span>
        <br className="home-text1"></br>
        <span className="home-text2">
          Downtown LA - 9:00 AM to 10:00PM Monday thru Saturday
        </span>
        <br className="home-text3"></br>
        <span className="home-text4">
          Northridge - 9:00 AM to 10:00 PM Monday thru Saturday
        </span>
        <br className="home-text5"></br>
        <span className="home-text6">
          Simi Valley - 9:00 AM to 10:00 PM Monday thru Saturday
        </span>
        <br className="home-text7"></br>
        <br></br>
      </span>
      <span className="home-color-line">Test</span>
      <img
        alt="image"
        src="https://www.medibank.com.au/content/dam/livebetter/en/images/migrated/41f5d31634e6a83e2895afe1aca7003d/how-to-make-better-pizza.jpg"
        className="home-second-img"
      />
      <img
        alt="image"
        src="https://media.istockphoto.com/id/1313418058/photo/vegetarian-dishes.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=Xi3-TTVD0xH3K4Vuf24-Kp_NAaBmLgLMUyYbcomECxg="
        className="home-third-img"
      />
      <span className="home-not-sure">Not sure what to put here</span>
    </div>
    </>
  );
};

export default Home;
