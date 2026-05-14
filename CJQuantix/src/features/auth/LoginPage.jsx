import React, { useState } from "react";

import { Lock, Mail, Eye, EyeOff, User } from "lucide-react";

import { NavLink } from "react-router-dom";

import White_Logo from "../../assets/White_Logo.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen items-center justify-center  ">
      <div className="login-container flex  border-2 px-8 py-12 gap-8 ">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-600">CJ-Quantix ERP</h2>

          <h1 className="text-4xl font-bold text-slate-900 leading-tight">
            Streamline operations.
            <br />
            <span className="text-purple-800"> Drive efficiency.</span>
          </h1>

          <p className="text-gray-800 mt-4 max-w-sm leading-relaxed">
            A centralized manufacturing and business management system.
          </p>

          {/* LOGO */}

          <div className="w-full h-58 border-2 rounded mt-8">
            <img
              className="w-full h-full object-contain"
              src={White_Logo}
              alt="CJ-Quantix Logo"
            />
          </div>
        </div>

        {/* Login form */}

        <div className="flex f justify-center items-center rounded-md border-2 w-120 h-full p-8 ">
          <div className="w-100">
            <h2 className="text-4xl font-bold">Welcome back</h2>

            <p className=" mt-1.5  text-gray-800">
              Log in to access your manufacturing dashboard.
            </p>

            <div className="my-4  w-full">
              {/* Email field */}

              <div>
                <label
                  className="className= text-md font-medium "
                  htmlFor="email"
                >
                  Email
                </label>

                <div
                  className="flex items-center   px-4   justify-center gap-2   border-2 p-1.5  rounded text-gray-600  mt-1.5

                 focus-within:border-purple-400 "
                >
                  <Mail size={20} />

                  <input
                    className="w-full outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:black] "
                    type="email"
                    placeholder="Email or username"
                  />
                </div>
              </div>

              {/* Password field */}

              <div className="mt-4">
                <label className="text-md font-medium" htmlFor="password">
                  Password
                </label>

                <div
                  className="border-2 p-1.5  rounded  text-gray-600 mt-1.5

                focus-within:border-purple-400"
                >
                  <div className="flex items-center px-1  gap-2 mx-1.5">
                    <Lock />

                    <input
                      className="outline-none w-full"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="focus:outline-none hover:text-purple-400 transition-colors"
                    >
                      {showPassword ? (
                        <Eye size={20} className="text-purple-800 " />
                      ) : (
                        <EyeOff size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" name="rememberme" id="rememberme" />

                <label
                  htmlFor="rememberme"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>

                <span className="ml-auto text-sm font-medium text-purple-800 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>

              <div className="flex-col items-center justify-center mt-8">
                <NavLink to="/dashboard">
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800">
                    Log In
                  </button>
                </NavLink>

                <div className="items-center center justify-center mt-4 flex">
                  <span>Don't have an account?</span>

                  <NavLink
                    to="/register"
                    className="ml-1 text-sm font-medium text-purple-800 hover:underline cursor-pointer"
                  >
                    Create account
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

export default LoginPage;
