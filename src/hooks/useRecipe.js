import { useEffect, useState } from "react";
import { recipesApi, transformRecipeData } from "../services/api";

export const useRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await recipesApi.getRandomRecipes();
      const transformedData = data.map(transformRecipeData).filter(Boolean);
      setRecipes(transformedData);
    } catch (error) {
      setError("Failed to fetch recipes", error);
      console.error("Error fetching random recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = async (searchTerm) => {
    if (!searchTerm.trim()) {
      await fetchRandomRecipes();
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const data = await recipesApi.searchRecipes(searchTerm);
      const transformedData = data.map(transformRecipeData).filter(Boolean);
      setRecipes(transformedData);
    } catch (error) {
      setError("Failed To fetch Recipes", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipesByCategory = async (category) => {
    try {
      setLoading(true);
      setError(null);
      const apiRecipes = await recipesApi.getCetgory(category);
      const detailRecipes = await Promise.all(
        apiRecipes.slice(0, 8).map(async (recipe) => {
          const detail = await recipesApi.getRecipesById(recipe.idMeal);
          return transformRecipeData(detail);
        }),
      );
      setRecipes(detailRecipes.filter(Boolean));
    } catch (error) {
      setError("Failed To fetch Recipes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  return {
    recipes,
    loading,
    error,
    searchRecipes,
    fetchRandomRecipes,
    fetchRecipesByCategory,
    refetch: fetchRandomRecipes,
  };
};
