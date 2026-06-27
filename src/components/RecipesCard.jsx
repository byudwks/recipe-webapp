import React from "react";
import { RiTimeLine, RiUserLine } from "react-icons/ri";

const RecipesCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105">
      <div className="relative">
        <img
          src=""
          alt=""
          className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-balck/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-cl font-bold text-gray-800 mb-2 line-clamp-1">
          Recipe Title
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
          Recipe Description
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <RiUserLine className="w-4 h-4" />
              <span className="">Serving:</span>
            </div>
            <div className="flex items-center space-x-1">
              <RiTimeLine className="w-4 h-4" />
              <span className="">Prep:</span>
            </div>
            <div className="flex items-center space-x-1">
              <RiTimeLine className="w-4 h-4" />
              <span className="">Cook:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
