import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/pages/auth.css";
import axios from "axios";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/login/", values)
      .then((res) => {
        if (res.data.message === "Success") {
          navigate("/");
        } else {
          alert("Hey!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header />
      <div className="willy">
      <div className="main-default">
        <h2 className="form-header-default">Sign In</h2>
        <form className="form-container-default" onSubmit={handleSubmit}>
          <div className="form-box-default">
            <label>Email:</label>
            <input
              className="input-form-default"
              type="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div className="form-box-default">
            <label>Password:</label>
            <input
              className="input-form-default"
              type="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
          </div>
          <button className="Botton-default" type="submit">
            Login
          </button>
        </form>
        <div className="links-container-default ">
          <div className="links-default">
            <h3>Don't have an account?</h3>
            <Link className="Link-default" to={"/account/create"}>
              Signup Now
            </Link>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default SignIn;
