import { RefreshCcw } from "lucide-react";
import React from "react";
import FilterBar from "../components/FilterBar";
import RecipeGrid from "../components/RecipeGrid";

const RecipesPage = () => (
  <div className="min-h-screen bg-light-neutral-0  font-nunito">
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
        Explore Our <span>Healthy & Simple </span> Recipes
      </h1>
      <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
        Discover nutrition recipes form around the world that fit your busy
        lifestyle. Search by name, ingredient, or explore by category - find
        yout next favorite dsih !
      </p>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10 ">
        {/* contional redndering */}
        <div className="mt-8 p-8 bg-red-50 border border-red-200 rounded-2xl inline-blok">
          <p className="text-red-600">Error</p>
          <button className="mt-4 inline-flex items-center px-6 py-3 bg-secondary text-white rounded-xl hover:bg-orange-400 transition-all duration-300 font-semibold ">
            <RefreshCcw className="w-4 h-4 mr-2" />
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <FilterBar />
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <RecipeGrid />
      </div>
    </div>
  </div>
);

export default RecipesPage;
