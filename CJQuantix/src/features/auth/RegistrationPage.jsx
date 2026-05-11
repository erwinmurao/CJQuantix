import React from "react";
import { Lock, Mail, Eye, EyeOff, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const RegistrationPage = () => {
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
          <div className="flex w-100 h-70 border-2 rounded mt-4"></div>
        </div>
        {/* Login form */}
        <div className=" rounded-md border-2 w-100 h-150 p-10">
          <div>
            <h2 className="text-xl font-medium">Create Account</h2>
            <p className="text-sm mt-1.5  text-gray-600">
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
                <div className="flex items-center  px-4  justify-center gap-2   border-2 p-1.5  rounded text-gray-600  mt-1.5">
                  <User />
                  <input
                    className="w-full  outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:black] "
                    type="text"
                    placeholder="Username or email"
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
                <div className="flex items-center  px-4  justify-center gap-2   border-2 p-1.5  rounded text-gray-600  mt-1.5">
                  <Mail />
                  <input
                    className="w-full  outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_white_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:black] "
                    type="email"
                    placeholder="Email"
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

              {/*Confirm Password field */}
              <div className="mt-4">
                <label className="text-md font-medium" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <div className="border-2 p-1.5  rounded  text-gray-600 mt-1.5">
                  <div className="flex items-center px-1  gap-2 mx-1.5">
                    <Lock />
                    <input
                      className="outline-none w-full"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <EyeOff />
                  </div>
                </div>
              </div>
              <div className="flex-col items-center justify-center mt-6">
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
