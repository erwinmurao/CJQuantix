import React from 'react'
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
 return (
    <div className="flex">
      <Sidebar /> {/* Stays on the left */}
      <main className="flex-1 p-8 bg-gray-50 h-screen overflow-y-auto">
        <Outlet /> {/* Inventory.jsx or Manufacturing.jsx renders here */}
      </main>
    </div>
  );
};

export default MainLayout