import React from "react";
import imahe from "../../assets/hero.png";
import { Download, Trash, SquarePen, Plus } from "lucide-react";

const items = [
  {
    name: "Product A",
    image: imahe,
    quantity: 10,
    stockIn: 5,
    stockOut: 3,
    available: 7,
    dateTime: "2026-01-01",
    inOut: "IN",
    time: "10:30 AM",
  },
  {
    name: "Product B",
    image: imahe,
    quantity: 20,
    stockIn: 10,
    stockOut: 5,
    available: 15,
    dateTime: "2026-01-02",
    inOut: "OUT",
    time: "2:45 PM",
  },
];

const Inventory = () => {
  // FIXED: Enforced explicit grid column structure permanently across all views
  // to align correctly inside the horizontal scroll pane wrapper.
  const rowGrid =
    "grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.2fr_1.2fr_1fr] gap-4 p-4 items-center border-b border-gray-100 transition-colors text-sm";

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header Card */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center bg-white border border-gray-200/80 p-5 md:p-6 rounded-xl shadow-xs">
        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            Inventory Management
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Real-time stock quantities and performance tracking indicators
          </p>
        </div>

        {/* Responsive Header Button Tray */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center p-2.5 border border-gray-300 rounded-xl text-gray-600 bg-white hover:bg-gray-50 active:scale-95 transition-all shadow-xs cursor-pointer">
            <Download size={18} />
          </button>

          <button className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all shadow-xs cursor-pointer">
            <Plus size={16} />
            Add Item
          </button>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-gray-900 text-lg tracking-tight mb-3">
            Stock Overview Logs
          </h2>
        </div>

        {/* Table Section - Protected overflow bounds handling horizontal scrolls */}
        <div className="w-full overflow-x-auto rounded-xl border border-gray-200/80 shadow-xs bg-white">
          {/* Changed min-w minimum barrier size to ensure text blocks never collapse into each other */}
          <div className="min-w-[950px] divide-y divide-gray-100">
            {/* Table Header Row */}
            <div
              className={`${rowGrid} bg-gray-50/70 font-bold uppercase tracking-wider text-gray-500 text-xs`}
            >
              <div>Product Name</div>
              <div>Quantity</div>
              <div>Stock In</div>
              <div>Stock Out</div>
              <div>Available</div>
              <div>Date & Time</div>
              <div>In / Out</div>
              <div className="text-right pr-4">Action</div>
            </div>

            {/* Table Body Container */}
            <div className="divide-y divide-gray-100 text-gray-700 bg-white">
              {items.map((item, index) => (
                <div key={index} className={`${rowGrid} hover:bg-gray-50/40`}>
                  {/* Product Column Info Card */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </span>
                  </div>

                  {/* Quantitative Metrics Fields */}
                  <div className="font-medium">{item.quantity}</div>
                  <div className="font-semibold text-emerald-600">
                    +{item.stockIn}
                  </div>
                  <div className="font-semibold text-rose-600">
                    -{item.stockOut}
                  </div>
                  <div className="font-bold text-gray-900">
                    {item.available}
                  </div>

                  {/* Calendar Timestamps */}
                  <div>
                    <div className="text-gray-500 text-xs">{item.dateTime}</div>
                    <div className="text-gray-500 text-xs">{item.time}</div>
                  </div>

                  <div className="text-gray-500 text-medium">{item.inOut}</div>

                  {/* Action Drop Controls */}
                  <div className="flex items-center justify-end gap-1 text-right">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                      <SquarePen size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
