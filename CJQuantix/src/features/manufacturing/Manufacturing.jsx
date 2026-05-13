import React from "react";
import { Settings, TrendingUp } from "lucide-react";
import Logo from "../../assets/White_Logo.png"; // Using your CJ-Quantix logo

const Manufacturing = () => {
  return (
    <div className="relative w-full h-80 border-2 rounded-xl flex items-center justify-center overflow-hidden bg-white">
      {/* Background Icon: Settings (Bottom Left) */}
      <Settings
        size={120}
        className="absolute -bottom-6 -left-6 text-gray-100 opacity-50 -rotate-12"
      />

      {/* Main Logo (Center) */}
      <div className="relative z-10 p-6 flex flex-col items-center">
        <img src={Logo} alt="CJ-Quantix Logo" className="w-64 object-contain" />
      </div>

      {/* Background Icon: Analytics (Bottom Right) */}
      <TrendingUp
        size={120}
        className="absolute -bottom-4 -right-4 text-gray-100 opacity-50"
      />
    </div>
  );
};

export default Manufacturing;
