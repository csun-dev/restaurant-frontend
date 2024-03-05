import { useNavigate } from "react-router-dom";
import "../../css/components/header.css";
import pizzaLogo from "../../../public/pizza.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-tap">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src={pizzaLogo}
          alt="Page Logo SVG"
        />
        <div onClick={() => navigate("/")}>Home</div>
        <div onClick={() => navigate("/menu")}>Menu</div>
      </div>

      <div className="header-auth">
        <div onClick={() => navigate("/account/signin")}>Sign in</div>
        <div onClick={() => navigate("/account/create")}>Join now</div>
      </div>
    </header>
  );
};

export default Header;
