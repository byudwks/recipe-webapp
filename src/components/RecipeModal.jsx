import React from "react";
import { RiCloseFill, RiTimerLine } from "react-icons/ri";

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

        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Recipe Title
            </h2>
            <p className="text-gray-600 text-lg">
              Recipe description goes here.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
            <div className="text-center">
              <RiTimerLine className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Prep Time:</p>
              <p className="text-gray-800 font-semibold">Prep Time</p> Min
            </div>
            <div className="text-center">
              <RiTimerLine className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Prep Time:</p>
              <p className="text-gray-800 font-semibold">Cook Time</p> Min
            </div>
            <div className="text-center">
              <RiTimerLine className="h-6 w-6 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Prep Time:</p>
              <p className="text-gray-800 font-semibold">Prep Time</p> Min
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
