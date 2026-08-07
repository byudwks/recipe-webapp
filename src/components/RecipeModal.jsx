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
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Ingredients
              </h3>
              <div className="space-y-3">
                {/* i Will use map Method */}
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700 ">Ingredients</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Instuctions
              </h3>
              <div>
                {/* i will use map method */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                    Index
                  </div>
                  <p className="text-gray-700 leading-relaxed">Intructions</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 ">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 ">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {/* i will use map method */}
                <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                  #Tags
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
