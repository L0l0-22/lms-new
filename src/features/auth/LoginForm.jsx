import React from "react";
import { Link } from "react-router-dom";
import logo from "/webapps/lms_react/src/assets/Logo-02.png";
import loginimg from "/webapps/lms_react/src/assets/Sign In Vec.svg";

export default function LoginForm() {
  return (
<div className="min-h-screen flex flex-col md:flex-row">
<div className="hidden md:block  md:w-1/2">
<img
          src={loginimg}
          alt="Login Visual"
          className="w-full h-screen object-cover h-full md:h-screen "
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-72 mb-12" />
          </Link>
          <h5 className="text-3xl font-semibold text-gray-800">Login</h5>
          <h5 className="text-2xl font-normal text-gray-800 mt-2 mb-12">
            Nice to see you again!
          </h5>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email or Phone
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email or Phone"
                className="w-full h-12 border border-gray-300 rounded px-3"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full h-12 border border-gray-300 rounded px-3"
                required
              />
            </div>

            <div className="flex justify-end text-sm mb-6">
              <Link to="/forgetpassword" className="text-green-500 hover:underline">
                Forget password
              </Link>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full h-12 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded"
              >
                Login
              </button>
            </div>

            <div className="text-center text-sm">
              <p>
                Don't have an account?
                <Link to="/register" className="text-green-500 hover:underline ml-1">
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}