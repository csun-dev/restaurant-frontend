import { Link } from "react-router-dom";
import "../../css/components/header.css";
import pizzaLogo from "/pizza.svg";
import navTap from "/nav_tap.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [auth, setAuth] = useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8000/user").then((res) => {
      if (res.data.message === "Success") {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8000/user/logout")
      .then((res) => {
        if (res.data.message === "Success") {
          alert("successfully logout");
          window.location.reload();
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleNotClick = () => {
    alert("Your computer will ba HACK in 2 min");
  };

  return auth ? (
    <header className="header">
      <div className="header__nav--tap">
        <img className="header__nav--logo" src={navTap} alt="Nav Tap SVG" />
        <div>
          <Link className="header__link--nav--tap" to="/">
            Home
          </Link>
          <Link className="header__link--nav--tap" to="/menu">
            Menu
          </Link>
          <Link
            className="header__link--nav--tap"
            to="/"
            onClick={handleLogout}
          >
            Logout
          </Link>
          <Link
            className="header__link--nav--tap"
            to="/"
            onClick={handleNotClick}
          >
            Do not Click this!
          </Link>
        </div>
      </div>
      <Link className="header__link--main--logo" to="/">
        <img
          className="header__logo--main"
          src={pizzaLogo}
          alt="Page Logo SVG"
        />
      </Link>
      <div className="header__tap">
        <Link className="header__tap--link" to="/">
          Home
        </Link>
        <Link className="header__tap--link" to="/menu">
          Menu
        </Link>
      </div>
      <div className="header__auth">
        <Link className="header__auth--link" to="/" onClick={handleLogout}>
          Logout
        </Link>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header__nav--tap">
        <img className="header__nav--logo" src={navTap} alt="Nav Tap SVG" />
        <div>
          <Link className="header__link--nav--tap" to="/">
            Home
          </Link>
          <Link className="header__link--nav--tap" to="/menu">
            Menu
          </Link>
          <Link className="header__link--nav--tap" to="/account/signin">
            Sign in
          </Link>
          <Link className="header__link--nav--tap" to="/account/create">
            Join now
          </Link>
        </div>
      </div>
      <Link className="header__link--main--logo" to="/">
        <img
          className="header__logo--main"
          src={pizzaLogo}
          alt="Page Logo SVG"
        />
      </Link>
      <div className="header__tap">
        <Link className="header__tap--link" to="/">
          Home
        </Link>
        <Link className="header__tap--link" to="/menu">
          Menu
        </Link>
      </div>
      <div className="header__auth">
        <Link className="header__auth--link" to="/account/signin">
          Sign in
        </Link>
        <Link className="header__auth--link" to="/account/create">
          Join now
        </Link>
      </div>
    </header>
  );
};

export default Header;
