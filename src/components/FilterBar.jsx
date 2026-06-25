import React from "react";

const FilterBar = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl mb-12 border border-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-3 ">
            Category
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
