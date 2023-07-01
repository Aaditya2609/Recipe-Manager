import React, { useState, useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const EditRecipeModal = ({ recipeData, closeModal }) => {
  const { recipe, setRecipe } = useContext(RecipeContext);
  const [updatedRecipe, setUpdatedRecipe] = useState(recipeData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUpdatedRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: imageUrl
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipeList = recipe.map((item) =>
      item.name === recipeData.name ? updatedRecipe : item
    );
    setRecipe(updatedRecipeList);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            Name:
            <input
              type="text"
              name="name"
              value={updatedRecipe.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputDiv">
            Ingredients:
            <textarea
              name="ingredients"
              value={updatedRecipe.ingredients}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputDiv">
            Instructions:
            <textarea
              name="instructions"
              value={updatedRecipe.instructions}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputDiv">
            Cuisine:
            <input
              type="text"
              name="cuisine"
              value={updatedRecipe.cuisine}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputDiv">
            Image:
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipeModal;
