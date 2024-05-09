import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/pages/auth.css";
import "../css/pages/join.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Join = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/signup/", values)
      .then((res) => {
        if (res.data.message === "Success") {
          alert("Welcome!");
          navigate("/account/signin");
        } else {
          alert("Something went wrong!");
        }
      })
      .catch((err) => {
        alert("Something went wrong!");
      });
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="main-default main-box-lg">
          <h2 className="form-header-default">Create account</h2>
          <form className="form-container-default" onSubmit={handleSubmit}>
            <div className="form-box-default">
              <label>Username:</label>
              <input
                className="input-form-default"
                type="text"
                onChange={(e) =>
                  setValues({ ...values, username: e.target.value })
                }
                required
              />
            </div>
            <div className="form-box-default">
              <label>Email:</label>
              <input
                className="input-form-default"
                type="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
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
            <button className="button-default" type="submit">
              Signup
            </button>
          </form>
          <div className="links-container-default">
            <div className="links-default">
              <h3>Already have an account?</h3>
              <Link className="link-default" to={"/account/signin"}>
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Join;
