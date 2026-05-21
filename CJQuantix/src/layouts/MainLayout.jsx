import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    // 1. Force the root layout container to remain absolutely locked to the viewport boundaries
    <div className="flex flex-col lg:flex-row h-screen w-screen overflow-hidden bg-gray-100">
      
      {/* Fixed Sidebar: Handles its own layout and responsive drawer logic internally */}
      <Sidebar />

      {/* 2. Scroll Container Sandbox */}
      {/* flex-1 gives it all remaining width; h-full locks its boundary; overflow-y-auto enables crisp scrolling inside this container only */}
      <main className="flex-1 h-full overflow-y-auto min-w-0">
        
        {/* Main Application Inner Frame */}
        <div className="p-4 md:p-6 lg:p-8 mx-auto w-full">
          
          {/* Note: If you want ItemLog to only appear inside your Inventory module, 
              remove it from here and place it directly inside your /inventory page component instead! */}
          
          {/* Main Route Rendering Port */}
          <Outlet />
          
        </div>
      </main>
    </div>
  );
};

export default MainLayout;