import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpWideNarrow,
  ArrowDownWideNarrow,
  ChevronDown,
  BarChart3,
  TrendingUp,
  Users,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  // Chart selection state management
  const [activeChart, setActiveChart] = useState("Sales");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Time Range Dropdown States (Chart specific)
  const [activeTimeRange, setActiveTimeRange] = useState("Last 7 days");
  const [isTimeMenuOpen, setIsTimeMenuOpen] = useState(false);
  const timeMenuRef = useRef(null);

  // --- FIXED: Global Header Time Range Dropdown States ---
  const [activeGlobalTime, setActiveGlobalTime] = useState("1 Day");
  const [isGlobalTimeMenuOpen, setIsGlobalTimeMenuOpen] = useState(false);
  const globalTimeMenuRef = useRef(null);

  // Close dropdowns cleanly if user clicks anywhere outside of them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (timeMenuRef.current && !timeMenuRef.current.contains(event.target)) {
        setIsTimeMenuOpen(false);
      }
      if (globalTimeMenuRef.current && !globalTimeMenuRef.current.contains(event.target)) {
        setIsGlobalTimeMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const metrics = [
    { title: "Total Sales", value: "₱24,400", percentage: "18.79%", isPositive: true },
    { title: "Total Orders", value: "500", percentage: "12.40%", isPositive: true },
    { title: "Total Customers", value: "1,250", percentage: "4.15%", isPositive: false },
    { title: "Average Order Value", value: "₱48.80", percentage: "18.79%", isPositive: true },
  ];

  const recentTransactions = [
    { id: "TXN12345", customer: "John Doe", amount: "₱15,000", date: "2026-10-01", item: "Wireless Mouse", payment: "GCash", cashier: "System Terminal A", status: "Completed" },
    { id: "TXN12346", customer: "Jane Smith", amount: "₱25,000", date: "2026-10-02", item: "Mechanical Keyboard", payment: "Maya", cashier: "System Terminal B", status: "Pending" },
    { id: "TXN12347", customer: "Bob Johnson", amount: "₱35,000", date: "2026-10-03", item: '27" IPS Monitor', payment: "Bank Transfer", cashier: "System Terminal A", status: "Completed" },
  ];

  const chartOptions = [
    { id: "Sales", label: "Sales Revenue", icon: <TrendingUp size={14} /> },
    { id: "Orders", label: "Order Volume", icon: <BarChart3 size={14} /> },
    { id: "Customers", label: "Customer Acquisition", icon: <Users size={14} /> },
  ];

  const timeOptions = [
    { label: "Today" },
    { label: "Last 7 days" },
    { label: "Last 28 days" },
    { label: "Day" },
    { label: "Week" },
    { label: "Month" }
  ];

  // --- NEW: Global header time filtering options ---
  const globalTimeOptions = [
    { label: "24 Hours" },
    { label: "1 Day" },
    { label: "1 Month" },
    { label: "3 Months" },
    { label: "YTD" },
    { label: "1 Year" },
    { label: "Max" }
  ];

  return (
    <div className="w-full mx-auto flex flex-col gap-6 p-4 md:p-6 text-gray-900">
      {/* Header Section */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="font-bold text-2xl md:text-3xl tracking-tight text-gray-900">Overview</h1>
          <p className="text-sm text-gray-500 mt-0.5">Real-time sales and performance metrics</p>
        </div>

        {/* --- FIXED: Fully Interactive Global Filter --- */}
        <div ref={globalTimeMenuRef} className="relative self-start sm:self-center">
          <button 
            onClick={() => setIsGlobalTimeMenuOpen((prev) => !prev)}
            className="flex items-center gap-1.5 border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-xs cursor-pointer"
          >
            {activeGlobalTime}
            <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isGlobalTimeMenuOpen ? "rotate-180" : ""}`} />
          </button>

          {isGlobalTimeMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-30 animate-in fade-in slide-in-from-top-1 duration-100">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 flex items-center gap-1">
                <Calendar size={10} /> Filter Range
              </div>
              {globalTimeOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => {
                    setActiveGlobalTime(option.label);
                    setIsGlobalTimeMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
                    activeGlobalTime === option.label 
                      ? "bg-purple-50 text-purple-700 font-semibold" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((item, index) => (
          <div key={index} className="flex flex-col bg-white border border-gray-200/80 p-5 rounded-xl justify-between shadow-xs transition-all hover:shadow-md">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider truncate">{item.title}</span>
            <div className="flex flex-col font-bold text-2xl lg:text-3xl text-gray-900 mt-3 tracking-tight">
              <span>{item.value}</span>
              <span className="flex gap-1 items-center text-xs font-semibold mt-2.5">
                {item.isPositive ? (
                  <><ArrowUpWideNarrow size={14} className="text-emerald-600 shrink-0" /><span className="text-emerald-600">{item.percentage}</span></>
                ) : (
                  <><ArrowDownWideNarrow size={14} className="text-rose-600 shrink-0" /><span className="text-rose-600">{item.percentage}</span></>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Charts Box */}
      <div className="bg-white rounded-xl shadow-xs border border-gray-200/80 p-5 md:p-6">
        <div className="flex justify-between items-start relative">
          
          {/* Dynamic Title and Interactive Time Range Menu */}
          <div ref={timeMenuRef} className="relative">
            <h2 className="text-lg font-bold tracking-tight capitalize">{activeChart} Analytics</h2>
            
            {/* Clickable time filter layout */}
            <button 
              onClick={() => setIsTimeMenuOpen((prev) => !prev)}
              className="flex items-center gap-1 text-sm font-medium text-purple-600 mt-0.5 hover:text-purple-800 transition-colors cursor-pointer"
            >
              {activeTimeRange}
              <ChevronDown size={16} className={`transition-transform duration-200 ${isTimeMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Time Filter Menu Dropdown Popover */}
            {isTimeMenuOpen && (
              <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-30 animate-in fade-in slide-in-from-top-1 duration-100">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50 flex items-center gap-1">
                  <Calendar size={10} /> Time Interval
                </div>
                {timeOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => {
                      setActiveTimeRange(option.label);
                      setIsTimeMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors cursor-pointer ${
                      activeTimeRange === option.label 
                        ? "bg-purple-50 text-purple-700 font-semibold" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Controller Dropdown Menu */}
          <div ref={menuRef} className="relative">
            <button 
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer shadow-xs"
            >
              <BarChart3 size={14} className="text-purple-600" />
              Change Chart
              <ChevronDown size={12} className={`text-gray-400 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Options List */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-30 animate-in fade-in slide-in-from-top-1 duration-100">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-50">
                  Select Data Source
                </div>
                {chartOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setActiveChart(option.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                      activeChart === option.id 
                        ? "bg-purple-50 text-purple-700 font-semibold" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <span className={activeChart === option.id ? "text-purple-600" : "text-gray-400"}>
                      {option.icon}
                    </span>
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chart Window Placeholder Container */}
        <div className="h-64 mt-4 bg-gray-50 border border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center gap-1.5">
          <div className="text-sm font-medium text-gray-500">
            Rendering <span className="text-purple-600 font-bold capitalize">{activeChart}</span> Chart View ({activeTimeRange})
          </div>
          <span className="text-xs text-gray-400">(Chart library integration endpoint ready)</span>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="bg-white border border-gray-200/80 rounded-xl shadow-xs p-5 md:p-6">
        <h2 className="text-lg font-bold tracking-tight">Recent Transactions</h2>
        <div className="mt-4 w-full overflow-x-auto border border-gray-100 rounded-xl">
          <div className="min-w-auto divide-y divide-gray-100">
            <div className="grid grid-cols-[2fr_1.2fr_1.2fr_2fr_1.2fr_2fr_1.2fr_1fr] gap-4 p-4 bg-gray-50/70 text-xs font-bold uppercase tracking-wider text-gray-500">
              <div>Customer</div><div>Date</div><div>Amount</div><div>Item</div><div>Payment</div><div>Cashier</div><div>Status</div><div className="text-right">Action</div>
            </div>
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="grid grid-cols-[2fr_1.2fr_1.2fr_2fr_1.2fr_2fr_1.2fr_1fr] gap-4 p-4 text-sm items-center hover:bg-gray-50/40 transition-colors text-gray-700">
                <div className="font-semibold text-gray-900">{transaction.customer}</div>
                <div className="text-gray-500 text-xs md:text-sm">{transaction.date}</div>
                <div className="font-bold text-gray-900">{transaction.amount}</div>
                <div className="truncate">{transaction.item || "—"}</div>
                <div>{transaction.payment || "—"}</div>
                <div className="truncate text-gray-500">{transaction.cashier || "—"}</div>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${transaction.status === "Completed" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                    {transaction.status || "Pending"}
                  </span>
                </div>
                <div className="text-right">
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;