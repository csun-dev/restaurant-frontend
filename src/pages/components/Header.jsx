import { Link } from "react-router-dom";
import "../../css/components/header.css";
import pizzaLogo from "../../../public/pizza.svg";
import navTap from "../../../public/nav_tap.svg";

const Header = () => {
  return (
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
