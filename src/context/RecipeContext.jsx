import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();
const recipesData = [
  {
    name: "Spaghetti Bolognese",
    ingredients:
      "500g spaghetti\n400g ground beef\n1 onion\n2 cloves garlic\n400g canned tomatoes\n2 tbsp tomato paste\n1 tsp dried oregano\n1 tsp dried basil\nSalt and pepper to taste",
    instructions:
      "Cook the spaghetti according to package instructions.\nIn a large pan, heat oil and sauté the onions and garlic until fragrant.\nAdd the ground beef and cook until browned.\nStir in the canned tomatoes, tomato paste, oregano, basil, salt, and pepper.\nSimmer the sauce for 15-20 minutes.\nServe the sauce over the cooked spaghetti.",
    cuisine: "Italian",
    image: "https://picsum.photos/?random=8"
  },
  {
    name: "Chicken Curry",
    ingredients:
      "500g chicken thighs\n1 onion\n2 cloves garlic\n1 red bell pepper\n1 can coconut milk\n2 tbsp curry powder\n1 tsp turmeric\n1 tsp cumin\nSalt and pepper to taste",
    instructions:
      "Heat oil in a large pan and sauté the onions and garlic until fragrant.\nAdd the chicken thighs and cook until browned.\nAdd the curry powder, turmeric, cumin, salt, and pepper. Stir well.\nAdd the red bell pepper and cook for a few more minutes.\nPour in the coconut milk and simmer for 20-25 minutes.\nServe the chicken curry with rice or naan bread.",
    cuisine: "Indian",
    image: "https://picsum.photos/?random=3"
  },
  {
    name: "Caesar Salad",
    ingredients:
      "1 head romaine lettuce\n2 slices bread\n2 tbsp olive oil\n2 cloves garlic\n2 tbsp grated Parmesan cheese\n2 tbsp lemon juice\n1 tsp Worcestershire sauce\nSalt and pepper to taste",
    instructions:
      "Preheat the oven to 180°C (350°F).\nTear the bread into small pieces and toss with olive oil and minced garlic.\nSpread the bread pieces on a baking sheet and bake for 10-15 minutes until crispy.\nIn a large bowl, combine grated Parmesan cheese, lemon juice, Worcestershire sauce, salt, and pepper.\nAdd the torn lettuce leaves and croutons to the bowl.\nToss everything together until well coated.\n7. Serve the Caesar salad as a side or main dish.",
    cuisine: "American",
    image: "https://picsum.photos/?random=5"
  }
];

export const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState(
    () => JSON.parse(localStorage.getItem("recipe")) || recipesData
  );

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
  }, [recipe]);

  const deleteRecipe = (recipeName) => {
    setRecipe((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.name !== recipeName)
    );
  };

  return (
    <RecipeContext.Provider value={{ recipe, setRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
