import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router-dom";
import White_Logo from "../../assets/White_Logo.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-amber-50/50 to-amber-100/20 p-4">
      {/* Main Container: max 800px, responsive layout */}
      <div className="login-container w-full max-w-[800px] flex flex-col lg:flex-row items-center bg-white lg:bg-transparent border-2 lg:border-0 rounded-2xl lg:rounded-none shadow-2xl lg:shadow-none overflow-hidden lg:gap-12 p-0">
        
        {/* Left Side: Brand/Hero Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-0 space-y-6">
          {/* Mobile Logo Only */}
          <div className="block lg:hidden w-full flex justify-center mb-4">
            <img
              className="h-32 object-contain"
              src={White_Logo}
              alt="CJ-Quantix Logo"
            />
          </div>

          {/* Desktop Text Branding */}
          <div className="hidden lg:block">
            <h2 className="text-lg font-bold text-gray-500 tracking-wider">
              CJ-QUANTIX ERP
            </h2>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mt-2">
              Streamline operations.
              <br />
              <span className="text-purple-800">Drive efficiency.</span>
            </h1>
            <p className="text-gray-600 text-base mt-4 max-w-sm leading-relaxed">
              A centralized manufacturing and business management system.
            </p>
          </div>

          {/* Desktop Logo Display */}
          <div className="hidden lg:block w-full border-2 border-dashed border-gray-200 rounded-2xl p-8 bg-white/50 backdrop-blur-sm">
            <img
              className="w-full h-40 object-contain"
              src={White_Logo}
              alt="CJ-Quantix Logo"
            />
          </div>
        </div>

        {/* Right Side: Login Form Card */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 bg-white lg:rounded-2xl lg:shadow-2xl lg:border border-gray-100">
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Hey! Welcome</h2>
              <p className="mt-2 text-gray-500 text-sm md:text-base">
                Log in to access your manufacturing dashboard.
              </p>
            </div>

            <div className="space-y-5">
              {/* Email field */}
              <div>
                <label className="text-sm font-semibold text-gray-700" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center px-4 gap-3 border-2 py-3 rounded-xl text-gray-400 mt-1.5 focus-within:border-purple-600 focus-within:text-purple-600 transition-all">
                  <Mail size={20} />
                  <input
                    id="email"
                    className="w-full outline-none bg-transparent text-gray-800"
                    type="email"
                    placeholder="Email or username"
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <label className="text-sm font-semibold text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center px-4 gap-3 border-2 py-3 rounded-xl text-gray-400 mt-1.5 focus-within:border-purple-600 focus-within:text-purple-600 transition-all">
                  <Lock size={20} />
                  <input
                    id="password"
                    className="outline-none w-full bg-transparent text-gray-800"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="focus:outline-none hover:text-purple-600"
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me / Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                  <span className="ml-2 text-gray-600 group-hover:text-gray-900 transition-colors">Remember me</span>
                </label>
                <span className="font-semibold text-purple-800 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <NavLink to="/dashboard">
                  <button className="w-full bg-purple-600 text-white py-3.5 rounded-xl hover:bg-purple-700 transition-all font-bold shadow-lg shadow-purple-200">
                    Log In
                  </button>
                </NavLink>

                <div className="mt-6 text-center text-sm">
                  <span className="text-gray-500">Don't have an account?</span>
                  <NavLink
                    to="/register"
                    className="ml-1.5 font-bold text-purple-800 hover:underline"
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