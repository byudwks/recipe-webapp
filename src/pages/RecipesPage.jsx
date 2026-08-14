import { RefreshCcw } from "lucide-react";
import React, { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar";
import RecipeGrid from "../components/RecipeGrid";
import RecipeModal from "../components/RecipeModal";
import { useRecipe } from "../hooks/useRecipe";

const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrepTime, setmMaxPrepTime] = useState(30);
  const [maxCookTime, setmaxCookTime] = useState(30);
  const [selectCategory, setSelectCategory] = useState("");
  const [selectRecipe, setSelectRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    recipes,
    loading,
    error,
    searchRecipes,
    fetchRandomRecipes,
    fetchRecipesByCategory,
    refetch,
  } = useRecipe();

  const filteredRecipe = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesPrepTime = recipe.prepTime <= maxPrepTime;
      const matchesCookTime = recipe.cookTime <= maxCookTime;
      return matchesPrepTime && matchesCookTime;
    });
  }, [recipes, maxPrepTime, maxCookTime]);

  const handleSearch = async (term) => {
    if (term.trim()) {
      await searchRecipes(term);
    } else {
      await refetch();
    }
  };

  const handleCategoryChange = async (category) => {
    setSelectCategory(category);

    if (category) {
      await fetchRecipesByCategory(category);
    } else {
      await refetch();
    }
  };

  const handleViewRecipe = (recipe) => {
    setSelectRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gray-100  font-nunito">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
          Explore Our <span>Healthy & Simple </span> Recipes
        </h1>
        <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
          Discover nutrition recipes form around the world that fit your busy
          lifestyle. Search by name, ingredient, or explore by category - find
          yout next favorite dish !
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-10 ">
          {/* contional redndering */}
          {error && (
            <div className="mt-8 p-8 bg-red-50 border border-red-200 rounded-2xl inline-blok">
              <p className="text-red-600">Error</p>
              <button className="mt-4 inline-flex items-center px-6 py-3 bg-secondary text-white rounded-xl hover:bg-orange-400 transition-all duration-300 font-semibold ">
                <RefreshCcw className="w-4 h-4 mr-2" />
              </button>
            </div>
          )}
        </div>

        {/* Filter Bar */}
        <div className="py-6">
          <div className="container mx-auto px-4">
            <FilterBar
              maxPrepTime={maxPrepTime}
              setmMaxPrepTime={setmMaxPrepTime}
              maxCookTime={maxCookTime}
              setmaxCookTime={setmaxCookTime}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onSearch={onSearch}
              onCategoryChange={onCategoryChange}
              setSelectCategory={setSelectCategory}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-2">
          <RecipeGrid
            recipes={filteredRecipe}
            onViewRecipe={handleViewRecipe}
            isLoading={loading}
          />
        </div>
      </div>

      {/* Recipes Modal */}
      <RecipeModal
        recipes={selectRecipe}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RecipesPage;
