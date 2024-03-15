// import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { MdAccountCircle } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./Login.css";
import "../Home/Testimonial/Testimonial.css"

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen backgroundImg">
      <div className="hero-content">
        <div className="wrapper">
          <h1>Login</h1>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                name="email"
                className="inputBox"
                required
              />
              <MdAccountCircle className="icon" />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                className="inputBox"
                name="password"
                required
              />
              <FaLock className="icon" />
            </div>

            <div className="form-control mt-6  text-center">
              <button className="inputBox -pr-7 bg-slate-900">Login</button>
            </div>

            <p>
              New Here?{" "}
              <span className="font-bold">
                <Link to="/signUp">Sign Up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
