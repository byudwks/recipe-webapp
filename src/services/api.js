const BASE_URL_API_RECIPE = "www.themealdb.com/api/json/v1/1/";

const cache = new Map();

export const recipesApi = {
  // search recipes
  searchRecipes: async (query) => {
    const cacheKey = `search-${query}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const respone = await fetch(
        `${BASE_URL_API_RECIPE}search.php?s=${query}`,
      );
      const data = await respone.json();
      const result = data.meals || [];
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.log("Error fetching recipes:", error);
      return [];
    }
  },

  //  get random recipes
  getRandomRecipes: async (count = 8) => {
    const cacheKey = "random-recipes";
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
  },
};
