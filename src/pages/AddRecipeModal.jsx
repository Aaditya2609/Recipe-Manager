import React, { useState, useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const AddRecipeModal = ({ closeModal }) => {
  const randomId = Math.floor(Math.random() * 1000);
  const { recipe, setRecipe } = useContext(RecipeContext);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    image: `https://picsum.photos/300/200/?random=${randomId}`
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      image: imageUrl
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = [...recipe, newRecipe];
    setRecipe(updatedRecipe);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputDiv">
            Name:
            <input
              type="text"
              name="name"
              value={newRecipe.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputDiv">
            Ingredients:
            <textarea
              name="ingredients"
              value={newRecipe.ingredients}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputDiv">
            Instructions:
            <textarea
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
            />
          </div>
          <div className="inputDiv">
            Cuisine:
            <input
              type="text"
              name="cuisine"
              value={newRecipe.cuisine}
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
            <button type="submit">Add</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeModal;
