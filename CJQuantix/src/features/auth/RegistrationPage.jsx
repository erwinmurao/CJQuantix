import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import White_Logo from "../../assets/White_Logo.png";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibilty = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleRegistration = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match! Please check again.");
      return;
    }
    console.log("Registering user...", { username, email, password });
  };

  return (
    <div className="flex h-screen items-center justify-center  ">
      <div className="login-container flex items-center  border-2 px-8 py-12 gap-8 ">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-500">CJ-Quantix</h2>

          <h1 className="text-4xl font-bold text-slate-900 leading-tight">
            Scale your business.
            <br />
            <span className="text-purple-800">Optimize results.</span>
          </h1>
          <p className="text-gray-800 mt-4 max-w-sm leading-relaxed">
            Join the centralized platform designed to simplify your
            manufacturing, inventory, and orders in one place.
          </p>
          <div className="flex w-full h-70 border-2 rounded mt-8">
            <img
              className=" w-full h-full  object-contain"
              src={White_Logo}
              alt="CJ-Quantix Logo"
            />
          </div>
        </div>
        {/* Registration form */}
        <div className=" rounded-md border-2 w-120 h-150 p-8">
          <div>
            <h2 className="text-4xl font-bold">Create Account</h2>
            <p className=" mt-1.5  text-gray-600">
              Sign up to access your manufacturing dashboard.
            </p>
            <div className="my-4">
              {/* Username field */}
              <div className="my-4">
                <label
                  className="className= text-md font-medium"
                  htmlFor="username"
                >
                  Username
                </label>
                <div
                  className="flex items-center  px-4  justify-center gap-2   border-2 p-1.5  rounded text-gray-600  mt-1.5
                  focus-within:border-purple-400"
                >
                  <User size={20} />
                  <input
                    className="w-full  outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:black] "
                    type="text"
                    placeholder="Username"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label
                  className="className= text-md font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <div
                  className="flex items-center  px-4  justify-center gap-2   border-2 p-1.5  rounded text-gray-600  mt-1.5
                  focus-within:border-purple-400"
                >
                  <Mail size={20} />
                  <input
                    className="w-full  outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:black] "
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="Password-container">
                <div className="mt-4">
                  <label className="text-md font-medium" htmlFor="password">
                    Password
                  </label>
                  <div
                    className="border-2 p-1.5  rounded  text-gray-600 mt-1.5
                   focus-within:border-purple-400"
                  >
                    <div className="flex items-center px-1  gap-2 mx-1.5">
                      <Lock size={20} />
                      <input
                        className="outline-none w-full"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVibility}
                        className="hover:text-purple-400 transition-colors"
                      >
                        {showPassword ? (
                          <Eye size={20} className="text-purple-800 "/>
                        ) : (
                          <EyeOff size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/*Confirm Password field */}
                <div className="mt-4">
                  <label
                    className="text-md font-medium"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <div
                    className="border-2 p-1.5  rounded  text-gray-600 mt-1.5
                   focus-within:border-purple-400"
                  >
                    <div className="flex items-center px-1  gap-2 mx-1.5">
                      <Lock size={20} />
                      <input
                        className="outline-none w-full"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibilty}
                        className="hover:text-purple-400 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <Eye size={20} className="text-purple-800 " />
                        ) : (
                          <EyeOff size={20} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/**Real-time Validation Message */}
                {confirmPassword && (
                  <div className="mt=1">
                    {password === confirmPassword ? (
                      <span className="text-xs text-green-600 font-medium">
                        Paswords match
                      </span>
                    ) : (
                      <span className="text-xs text-red-600 font-medium">
                        Password do not match
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="flex-col items-center justify-center mt-8">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800">
                  Create Account
                </button>
                <div className="items-center center justify-center mt-4 flex">
                  <span>Already have an account?</span>
                  <NavLink
                    to="/login"
                    className="ml-1 text-sm font-medium text-purple-800 hover:underline cursor-pointer"
                  >
                    Log In
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
