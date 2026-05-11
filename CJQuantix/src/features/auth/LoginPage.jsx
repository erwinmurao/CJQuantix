import React from "react";
import { Lock, Mail, Eye, EyeOff, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center  ">
      <div className="login-container flex border-2 px-8 py-12 gap-8 ">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-500">CJ-Quantix</h2>

          <h1 className="text-4xl font-bold text-slate-900">
            Streamline operations. <br /> Drive
            <span className="text-purple-600"> efficiency</span>.
          </h1>
          <p className="text-sm text-gray-600">
            Manage manufacturing, inventory, and ordders <br />
            from one centralized platfrorm.
          </p>
          <div className="w-100 h-70 border-2 rounded mt-4"></div>
        </div>
        {/* Login form */}
        <div className=" rounded-md border-2 w-100 h-120 p-10">
          <div>
            <h2 className="text-xl font-medium">Welcom back</h2>
            <p className="text-sm mt-1.5  text-gray-600">
              Log in to access your manufacturing dashboard.
            </p>
            <div className="my-4">

              {/* Email field */}
              <div>
                <label
                  className="className= text-md font-medium "
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="flex items-center  px-4   justify-center gap-2   border-2 p-1.5  rounded text-gray-600  mt-1.5">
                  <Mail />
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

                <div className="border-2 p-1.5  rounded  text-gray-600 mt-1.5">
                  <div className="flex items-center px-1  gap-2 mx-1.5">
                    <Lock />

                    <input
                      className="outline-none w-full"
                      type="password"
                      placeholder="Password"
                    />
                    <EyeOff />
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
              <div className="flex-col items-center justify-center mt-6">
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800">
                  Log In
                </button>
                <div className="items-center center justify-center mt-4 flex">
                  <span>Don't have an account?</span>
                  <NavLink
                    to="/register"
                    className="ml-1 text-sm font-medium text-purple-800 hover:underline cursor-pointer"
                  >
                    Sign Up
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
