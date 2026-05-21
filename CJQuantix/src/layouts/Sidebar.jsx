import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Package,
  Factory,
  Settings,
  LogOut,
  ChevronDown,
  History,
  Menu, // Added for mobile open button
  X,    // Added for mobile close button
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../src/assets/Black_Logo.png";

const Sidebar = () => {
  const location = useLocation();
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // Mobile drawer state

  const isInventoryRoute = location.pathname.startsWith("/inventory");

  // Keep menu open if inside inventory, close if elsewhere
  useEffect(() => {
    if (isInventoryRoute) {
      setIsInventoryOpen(true);
    } else {
      setIsInventoryOpen(false);
    }
  }, [location.pathname, isInventoryRoute]);

  // Auto-close mobile sidebar drawer when the user switches pages
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Product", icon: <Package size={20} />, hasSubmenu: true },
    { name: "Sales", path: "/sales", icon: <Factory size={20} /> },
    { name: "Manufacturing", path: "/manufacturing", icon: <Factory size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  // Extracted layout contents to keep rendering dry and identical between screens
  const SidebarContent = () => (
    <div className="h-full w-64 bg-slate-900 text-white flex flex-col font-sans overflow-y-auto">
      {/* Top Banner Area */}
      <div className="mb-4 px-4 py-2 flex items-center justify-between">
        <img src={Logo} alt="CJ-Quantix Logo" className="w-40 object-contain lg:w-full" />
        {/* Mobile Close Button Container */}
        <button 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="lg:hidden p-1 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
      </div>

      <span className="m-4 text-xs font-bold tracking-wider text-gray-500 uppercase">Main Menu</span>

      <nav className="flex-1 space-y-1 px-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.hasSubmenu ? (
              <div className="space-y-1">
                <button
                  onClick={() => setIsInventoryOpen((prev) => !prev)}
                  className={`w-full flex items-center justify-between px-4 py-2 rounded-md transition-all duration-200 ${
                    isInventoryRoute
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isInventoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isInventoryOpen && (
                  <div className="mt-1 ml-9 border-l border-slate-700 space-y-1">
                    <NavLink
                      to="/inventory"
                      end 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors ${
                          isActive ? "text-purple-400 bg-slate-800/50" : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      <Package size={16} />
                      <span>Inventory</span>
                    </NavLink>
                    
                    <NavLink
                      to="/inventory/activity-log"
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors ${
                          isActive ? "text-purple-400 bg-slate-800/50" : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      <History size={16} />
                      <span>Activity Log</span>
                    </NavLink>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom Action Area */}
      <NavLink to="/login" className="mt-auto">
        <div className="flex items-center border border-slate-700 mx-4 rounded-md gap-3 px-4 mb-7 py-2 text-gray-400 hover:text-red-400 hover:border-red-400/30 transition-colors cursor-pointer">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </NavLink>
    </div>
  );

  return (
    <>
      {/* 1. MOBILE TOP TOGGLE BAR (Visible on screens smaller than lg) */}
      <div className="lg:hidden w-full bg-slate-900 border-b border-slate-800 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <img src={Logo} alt="CJ-Quantix Logo" className="h-8 object-contain" />
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="p-1 text-gray-400 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* 2. MOBILE OVERLAY DRAWER (Slid-out state handled via translate utilities) */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isMobileSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {/* Dark dim backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-xs" 
          onClick={() => setIsMobileSidebarOpen(false)}
        />
        
        {/* Drawer Content Panel */}
        <div className={`absolute top-0 left-0 bottom-0 transition-transform duration-300 ease-in-out transform ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <SidebarContent />
        </div>
      </div>

      {/* 3. DESKTOP PERMANENT VIEWPORT WINDOW (Visible only on xl/lg screens) */}
      <div className="hidden lg:flex lg:flex-col h-screen sticky top-0 border-r border-slate-800 shrink-0">
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;