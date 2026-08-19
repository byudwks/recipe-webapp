const BASE_URL_API_RECIPE = "https://www.themealdb.com/api/json/v1/1";

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
        `${BASE_URL_API_RECIPE}/search.php?s=${query}`,
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
    try {
      const promises = Array.from({ length: count }, () =>
        fetch(`${BASE_URL_API_RECIPE}/random.php`).then((res) => res.json()),
      );
      const results = await Promise.all(promises);
      const meals = results.map((result) => result.meals[0]).filter(Boolean);
      cache.set(cacheKey, meals);
      return meals;
    } catch (error) {
      console.log("Error fetching random recipes :", error);
      return [];
    }
  },

  // get recipes by id
  getRecipesById: async (id) => {
    const cacheKey = `recipe-${id}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const response = await fetch(`${BASE_URL_API_RECIPE}/lookup.php?i=${id}`);
      const data = await response.json();
      const result = data.meals?.[0] || null;
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.log("Error recipes Id :", error);
      return [];
    }
  },

  // get all category
  getRecipesByCategory: async () => {
    const cacheKey = `categories`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const response = await fetch(`${BASE_URL_API_RECIPE}/categories.php`);
      const data = await response.json();
      const result = data.categories || [];
      cache.set(cacheKey, result);
      return result;
    } catch (error) {
      console.error("Error fetching recipes by category:", error);
      return [];
    }
  },

  getCetgory: async (category) => {
    const cacheKey = `category-${category}`;
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    try {
      const response = await fetch(
        `${BASE_URL_API_RECIPE}/filter.php?c=${category}`,
      );
      const data = await response.json();
      const result = data.meals || [];
      cache.set(cacheKey, result);
      return result;
    } catch {
      console.error("tadak di metukan");
    }
  },
};

// api format
export const transformRecipeData = (recipesApi) => {
  if (!recipesApi) return null;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipesApi[`strIngredient${i}`];
    const measure = recipesApi[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(
        `${measure ? measure.trim() + "" : ""} ${ingredient.trim()}`,
      );
    }
  }

  const instructions = recipesApi.strInstructions
    ? recipesApi.strInstructions.split(/\r?\n/).filter((step) => step.trim())
    : [];

  const estimatedPrepTime = Math.floor(Math.random() * 15) + 5;
  const estimatedCookTime = Math.floor(Math.random() * 25) + 10;

  let category = "dinner";
  const mealCategory = recipesApi.strCategory?.toLowerCase() || "";
  if (mealCategory.includes("breakfast") || mealCategory.includes("lunch")) {
    category = mealCategory.includes("breakfast") ? "breakfast" : "lunch";
  } else if (
    mealCategory.includes("side") ||
    mealCategory.includes("starters")
  ) {
    category = "lunch";
  }

  return {
    id: recipesApi.idMeal,
    title: recipesApi.strMeal,
    description: `Delicious ${recipesApi.strMeal} from ${
      recipesApi.strArea || "International"
    } cuisine`,
    image: recipesApi.strMealThumb,
    category,
    cookTime: estimatedCookTime,
    prepTime: estimatedPrepTime,
    servings: Math.floor(Math.random() * 4) + 2,
    difficulty: estimatedCookTime > 25 ? "medium" : "easy",
    ingredients,
    instructions,
    tags: [
      recipesApi.strArea?.toLowerCase(),
      recipesApi.strCategory?.toLowerCase(),
      "recipe",
    ].filter(Boolean),
  };
};
