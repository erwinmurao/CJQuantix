import React from "react";
import imahe from "../assets/hero.png";

const items = [
  {
    name: "Product A",
    image: imahe, // Replace with your actual image paths
    quantity: 10,
    stockIn: 5,
    stockOut: 3,
    available: 7,
    dateAdded: "2023-01-01",
    dateOut: "2023-01-15",
  },
  {
    name: "Product B",
    image: imahe, // Replace with your actual image paths
    quantity: 20,
    stockIn: 10,
    stockOut: 5,
    available: 15,
    dateAdded: "2023-01-02",
    dateOut: "2023-01-16",
  },
];

const Dashboard = () => {
  // We use grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] to give the product name more room for the image
  const rowGrid =
    "grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 p-4 items-center border-b hover:bg-gray-50 transition-colors";

  return (
    <div className="p-6">
      <div className="border-2 px-4 py-8 rounded-lg mb-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold">Inventory Overview</h1>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-4 mb-4 list-none">
        <li className="relative mt-2 ">
          <input
            type="text"
            id="product_name"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="product_name"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Product name
          </label>
        </li>
        <li className="relative mt-2 ">
          <input
            type="text"
            id="quantity"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="quantity"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Quantity
          </label>
        </li>
        <li className="relative mt-2 ">
          <input
            type="text"
            id="product_name"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="product_name"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Product name
          </label>
        </li>
        <li className="relative mt-2 ">
          <input
            type="text"
            id="product_name"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="product_name"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Product name
          </label>
        </li><li className="relative mt-2 ">
          <input
            type="text"
            id="product_name"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="product_name"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Product name
          </label>
        </li>

        <li className="relative mt-2 ">
          <input
            type="text"
            id="product_name"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="product_name"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Product name
          </label>
        </li>
        <li className="relative mt-2 ">
          <input
            type="text"
            id="product_name"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="product_name"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Product name
          </label>
        </li>
        <li className="relative mt-2 ">
          <input
            type="text"
            id="product_name"
            placeholder=" "
            className="block bg-white px-4 py-3 w-full text-gray-900 bg-transparent rounded-md border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
          <label
            htmlFor="product_name"
            className="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3"
          >
            Product name
          </label>
        </li>
      </div>
      {/* Header */}
      <div
        className={`${rowGrid} bg-gray-100 font-bold list-none rounded-t-lg text-gray-700`}
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

      {/* Body */}
      <div className="list-none bg-white">
        {items.map((item, index) => (
          <li key={index} className={rowGrid}>
            {/* Image + Name Column */}
            <div className="flex items-center gap-3">
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

            {/* Other Columns */}
            <span className="text-gray-600">{item.quantity}</span>
            <span className="text-green-600 font-medium">+{item.stockIn}</span>
            <span className="text-red-500 font-medium">-{item.stockOut}</span>
            <span className="font-bold text-blue-600">{item.available}</span>
            <span className="text-sm text-gray-400">{item.dateAdded}</span>
            <span className="text-sm text-gray-400">{item.dateOut}</span>

            <button className="bg-slate-800 text-white text-xs px-4 py-2 rounded-md hover:bg-slate-700 active:scale-95 transition-all">
              DETAILS
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
