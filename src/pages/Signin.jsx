import Header from "./components/Header";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/pages/login.css";
import axios from "axios";

const SignIn = () => {
  const [input, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/login", input)
      .then((res) => {
        if (res.data.message === "Success") {
          navigate("/");
        }
      })
  };
  return (
    <>
      <Header />
      <section>
        <div className="form-box">
            <div className="form-value">
                <form onSubmit = {submit}>
                    <h2>Sign in</h2>
                    <div className="inputbox">
                        <input type="email" onChange={(e) => setValues({ ...input, email: e.target.value })} required />
                        <label for="">Email address</label>
                    </div>
                    <div className="inputbox">
                        <input type="password" onChange={(e) => setValues({ ...input, password: e.target.value })} required/>
                        <label for="">Password</label>
                    </div>
                    <div className="forget">
                        <label for=""><a href="#">Forgot Password</a></label>
                    </div>
                    <button type = "submit" >Sign in</button>
                    <div class="register">
                        <p>No account? <a href="#">Join now</a></p>
                    </div>
                </form>
            </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
