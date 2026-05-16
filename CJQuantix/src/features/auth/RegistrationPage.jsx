import React, { useState } from "react";
import { Lock, Mail, Eye, EyeOff, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import White_Logo from "../../assets/White_Logo.png";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registering user...", { username, email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-50 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-amber-50/50 to-amber-100/20 p-4">
      <div className="w-full max-w-[900px] flex flex-col lg:flex-row items-center bg-white lg:bg-transparent border-2 lg:border-0 rounded-2xl lg:rounded-none shadow-2xl lg:shadow-none overflow-hidden lg:gap-12">
        
        {/* Left Side: Branding */}
        <div className="w-full lg:w-1/2 p-8 lg:p-0 space-y-6">
          <div className="block lg:hidden w-full flex justify-center mb-4">
            <img className="h-28 object-contain" src={White_Logo} alt="Logo" />
          </div>

          <div className="hidden lg:block">
            <h2 className="text-lg font-bold text-gray-500 tracking-wider">CJ-QUANTIX</h2>
            <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mt-2">
              Scale your business.<br />
              <span className="text-purple-800">Optimize results.</span>
            </h1>
            <p className="text-gray-600 text-base mt-4 max-w-sm leading-relaxed">
              Join the centralized platform designed to simplify your manufacturing, inventory, and orders in one place.
            </p>
          </div>

          <div className="hidden lg:block w-full border-2 border-dashed border-gray-200 rounded-2xl p-8 bg-white/50 backdrop-blur-sm">
            <img className="w-full h-40 object-contain" src={White_Logo} alt="Logo" />
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 bg-white lg:rounded-2xl lg:shadow-2xl lg:border border-gray-100">
          <form onSubmit={handleRegistration} className="w-full">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
              <p className="mt-2 text-gray-500 text-sm">Sign up to access your manufacturing dashboard.</p>
            </div>

            <div className="space-y-4">
              {/* Username */}
              <div>
                <label className="text-sm font-semibold text-gray-700">Username</label>
                <div className="flex items-center px-4 gap-3 border-2 py-2.5 rounded-xl text-gray-400 mt-1 focus-within:border-purple-600 focus-within:text-purple-600 transition-all">
                  <User size={18} />
                  <input
                    className="w-full outline-none bg-transparent text-gray-800"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <div className="flex items-center px-4 gap-3 border-2 py-2.5 rounded-xl text-gray-400 mt-1 focus-within:border-purple-600 focus-within:text-purple-600 transition-all">
                  <Mail size={18} />
                  <input
                    className="w-full outline-none bg-transparent text-gray-800"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="flex items-center px-4 gap-3 border-2 py-2.5 rounded-xl text-gray-400 mt-1 focus-within:border-purple-600 focus-within:text-purple-600 transition-all">
                  <Lock size={18} />
                  <input
                    className="w-full outline-none bg-transparent text-gray-800"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <Eye size={18} className="text-purple-800"/> : <EyeOff size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                <div className="flex items-center px-4 gap-3 border-2 py-2.5 rounded-xl text-gray-400 mt-1 focus-within:border-purple-600 focus-within:text-purple-600 transition-all">
                  <Lock size={18} />
                  <input
                    className="w-full outline-none bg-transparent text-gray-800"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button type="button" onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <Eye size={18} className="text-purple-800"/> : <EyeOff size={18} />}
                  </button>
                </div>
                {confirmPassword && (
                  <p className={`text-xs mt-1 font-medium ${password === confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
                    {password === confirmPassword ? "✓ Passwords match" : "✗ Passwords do not match"}
                  </p>
                )}
              </div>

              <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-all font-bold shadow-lg shadow-purple-200 mt-4">
                Create Account
              </button>

              <div className="text-center text-sm mt-4">
                <span className="text-gray-500">Already have an account?</span>
                <NavLink to="/login" className="ml-1.5 font-bold text-purple-800 hover:underline">
                  Log In
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;