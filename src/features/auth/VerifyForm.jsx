import React from "react";
import logo from "/webapps/lms_react/src/assets/Logo-02.png";
import loginimg from "/webapps/lms_react/src/assets/Sign In Vec.svg";
import { Link } from "react-router-dom";

export default function VerifyForm() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={loginimg}
          alt="Verification Visual"
          className="w-full object-cover h-full md:h-screen"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-72 mb-12" />
          </Link>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Enter Verification Code</h2>
          <p className="text-sm text-gray-600 mb-6">
            We’ve sent a 6-digit code to your email. Please enter it below to verify your account.
          </p>

          <form>
            <div className="flex justify-between gap-2 mb-6">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center border border-gray-300 rounded text-lg font-semibold"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded"
            >
              Verify Code
            </button>
            <div className="text-center text-sm text-gray-500 mt-4">
              Didn’t receive the code? <button className="text-primaryBlue hover:underline">Resend</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
