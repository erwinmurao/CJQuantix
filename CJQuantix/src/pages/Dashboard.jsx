import React from "react";
import imahe from "../assets/hero.png";
import { Download, Trash, SquarePen } from "lucide-react";

const items = [
  {
    name: "Product A",
    image: imahe,
    quantity: 10,
    stockIn: 5,
    stockOut: 3,
    available: 7,
    dateAdded: "2023-01-01",
    dateOut: "2023-01-15",
  },
  {
    name: "Product B",
    image: imahe,
    quantity: 20,
    stockIn: 10,
    stockOut: 5,
    available: 15,
    dateAdded: "2023-01-02",
    dateOut: "2023-01-16",
  },
];

const Dashboard = () => {
  // Grid layout for Tablet (md) and Desktop (lg+)
  const rowGrid =
    "grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 p-4 items-center  border-b hover:bg-gray-50 transition-colors";

  return (
    <div className="p-4 md:p-6">
      {/* Header Card */}
      <div className="md:flex md:justify-between border-2 px-4 py-6 md:py-8 rounded-lg mb-6 bg-white shadow-sm">
        <h1 className="text-xl md:text-2xl font-bold">Inventory Overview</h1>
        <div className=" md:flex md:items-center :text-md md:gap-4">
          <Download />
          <div className="w-full md:w-auto mt-2 md:mt-0 md:bg-blue-500 md:px-6 md:rounded-lg md:py-2 md:text-white transition-all">
            <button>Add</button>
          </div>
        </div>
      </div>

      {/* Table Section - Horizontal scroll on mobile to protect the 'Web' feel */}
      <div className="overflow-x-auto rounded-lg border shadow-sm">
        <div className="min-w-[1000px] md:min-w-full">
          {/* Table Header */}
          <div
            className={`${rowGrid} bg-gray-100 font-bold list-none text-gray-700`}
          >
            <li>Product Name</li>
            <li>Quantity</li>
            <li>Stock In</li>
            <li>Stock Out</li>
            <li>Available</li>
            <li>Date Added</li>
            <li>Date Out</li>
            <li>Action</li>
          </div>

          {/* Table Body */}
          <div className="list-none bg-white">
            {items.map((item, index) => (
              <li key={index} className={rowGrid} >
                <div className="flex items-center gap-3 ">
                  <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-gray-800 truncate">
                    {item.name}
                  </span>
                </div>

                <span className="text-gray-600">{item.quantity}</span>
                <span className="text-green-600 font-medium">
                  +{item.stockIn}
                </span>
                <span className="text-red-500 font-medium">
                  -{item.stockOut}
                </span>
                <span className="font-bold text-blue-600">
                  {item.available}
                </span>
                <span className="text-sm text-gray-400">{item.dateAdded}</span>
                <span className="text-sm text-gray-400">{item.dateOut}</span>
                <div className="flex gap-2">
                  <button className="w-full md:w-auto bg-slate-800 text-white text-xs px-4 py-2 rounded-md hover:bg-slate-700 active:scale-95 transition-all">
                    <SquarePen />
                  </button>
                  <button className="w-full md:w-auto text-xs px-4 py-2 rounded-md hover:bg-red-600 active:scale-95 transition-all">
                    <Trash />
                  </button>
                </div>
              
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
