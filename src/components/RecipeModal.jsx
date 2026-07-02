import React from "react";
import { RiCloseFill } from "react-icons/ri";

const RecipeModal = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="relative">
          <img
            src=""
            alt=""
            className="w-full h-64 object-cover rounded-t-2xl "
          />

          <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200">
            <RiCloseFill className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
