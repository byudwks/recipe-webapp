import { ChevronDown } from "lucide-react";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

const prepTimeOptions = [
  { value: 30, label: "30 Mins" },
  { value: 20, label: "20 Mins" },
  { value: 15, label: "15 Mins" },
  { value: 10, label: "10 Mins" },
  { value: 5, label: "5 Mins" },
];

const cookTimeOptions = [
  { value: 30, label: "30 Mins" },
  { value: 20, label: "20 Mins" },
  { value: 15, label: "15 Mins" },
  { value: 10, label: "10 Mins" },
  { value: 5, label: "5 Mins" },
];

const categories = [
  { value: "", label: "All Categories" },
  { value: "Beef", label: "Beef" },
  { value: "Breakfast", label: "Breakfast" },
  { value: "Chicken", label: "Chicken" },
  { value: "Dessert", label: "Dessert" },
  { value: "Lamb", label: "Lamb" },
  { value: "Pasta", label: "Pasta" },
  { value: "Pork", label: "Pork" },
  { value: "Seafood", label: "Seafood" },
  { value: "Side", label: "Side" },
  { value: "Starter", label: "Starter" },
  { value: "Vegan", label: "Vegan" },
  { value: "Vegetarian", label: "Vegetarian" },
];

const FilterBar = ({
  maxPrepTime,
  setmMaxPrepTime,
  maxCookTime,
  setmaxCookTime,
  searchTerm,
  setSearchTerm,
  onCategoryChange,
  selectCategory,
  onSearch,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl mb-12 border border-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-700 mb-3 ">
            Category
          </label>
          <div className="relative">
            <select
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium"
              value={selectCategory}
              onChange={(e) => onCategoryChange(e.target.value)}>
              {/* conditional rendering */}
              {categories.map((item) => {
                return (
                  <option
                    key={item.idCategory || item.value}
                    value={item.strCategory || item.value}>
                    {item.strCategory || item.label}
                  </option>
                );
              })}
            </select>
            <ChevronDown className="absolute right-4 top-1/3 transform-tranlate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="ralative">
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-700 mb-3">
            Map Prep Time
          </label>
          <div className="relative">
            <select
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium"
              value={maxPrepTime}
              onChange={(event) => setmMaxPrepTime(event.target.value)}>
              {/* conditional rendering */}
              {prepTimeOptions.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            <ChevronDown className="absolute right-4 top-1/3 transform-tranlate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="ralative">
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-700 mb-3">
            Map Cook Time
          </label>
          <div className="relative">
            <select
              className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 appearance-none bg-white shadow-sm hover:shadow-md font-medium"
              value={maxCookTime}
              onChange={(event) => setmaxCookTime(event.target.value)}>
              {/* conditional rendering */}
              {cookTimeOptions.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            <ChevronDown className="absolute right-4 top-1/3 transform-tranlate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="ralative">
          <label
            htmlFor=""
            className="block text-sm font-semibold text-gray-700 mb-3">
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary focus:transparent outline-none transition-all duration-300 shadow-sm hover:shadow-md font-medium"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (onSearch) {
                  onSearch(e.target.value);
                }
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter" && onSearch) {
                  onSearch(setSearchTerm);
                }
              }}
            />
            <RiSearchLine className="absolute left-4 top-1/3 transform-tranlate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
