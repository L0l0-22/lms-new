import React from "react";
import "/webapps/lms_react/src/styles/Auth/Login.css";
import logo from "/webapps/lms_react/src/assets/Logo-02.png";
import loginimg from "/webapps/lms_react/src/assets/Sign In Vec.svg";
import { Link, useNavigate } from "react-router-dom";

export default function ForgetForm() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/2">
          <img
            src={loginimg}
            alt="Login Visual"
            className="w-full h-screen object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="max-w-md w-full">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-72 mb-12" />
            </Link>

            <h5 className="card-title5">Forget Password</h5>
            <h5 className="card-title6">We'll send you a code to verify your email address.</h5>

            <form onSubmit={(e) => { e.preventDefault(); navigate('/verify'); }}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="name@email.com"
                  className="w-full h-12 border border-gray-300 rounded px-3"
                  required
                />
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full h-12 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
