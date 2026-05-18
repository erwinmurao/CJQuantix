import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Package,
  Factory,
  Settings,
  LogOut,
  ChevronDown,
  History,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../src/assets/Black_Logo.png";

const Sidebar = () => {
  const location = useLocation();
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  // Check if current path belongs to inventory
  const isInventoryRoute = location.pathname.startsWith("/inventory");

  // Keep menu open if we are inside inventory, but close if we move to other main routes
  useEffect(() => {
    if (isInventoryRoute) {
      setIsInventoryOpen(true);
    } else {
      setIsInventoryOpen(false);
    }
  }, [location.pathname, isInventoryRoute]);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Product", icon: <Package size={20} />, hasSubmenu: true }, // Removed 'path' so it doesn't navigate
    { name: "Manufacturing", path: "/manufacturing", icon: <Factory size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="h-screen w-64 bg-slate-900 text-white flex flex-col font-sans">
      <div className="mb-4 px-4 py-2">
        <img src={Logo} alt="CJ-Quantix Logo" className="w-full object-contain" />
      </div>

      <span className="m-4 text-xs font-bold tracking-wider text-gray-500 uppercase">Main Menu</span>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.hasSubmenu ? (
              <div className="space-y-1">
                {/* Changed to a button to prevent auto-clicking the Item List route */}
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

                {/* Sub-menu Items */}
                {isInventoryOpen && (
                  <div className="mt-1 ml-9 border-l border-slate-700 space-y-1">
                    <NavLink
                      to="/inventory"
                      end 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-colors ${
                          isActive ? "text-purple-400 bg-slate-800/50" : "text-gray-500 hover:text-white"
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
                          isActive ? "text-purple-400 bg-slate-800/50" : "text-gray-500 hover:text-white"
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

      <NavLink to="/login" className="mt-auto">
        <div className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-red-400 transition-colors cursor-pointer">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;