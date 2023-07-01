import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import AddRecipeModal from "./AddRecipeModal";
import EditRecipeModal from "./EditRecipeModal";
import { NavLink } from "react-router-dom";

export const ListRecipes = () => {
  const { recipe, deleteRecipe } = useContext(RecipeContext);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchCategory, setSearchCategory] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const openEditModal = (recipeData) => {
    setSelectedRecipe(recipeData);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedRecipe(null);
  };

  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = recipe.filter((item) => {
    const searchField = item[searchCategory].toLowerCase();
    return searchField.includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1>All Recipes</h1>
      <button onClick={openAddModal} className="addbutton">
        Add Recipe
      </button>
      <div>
        <div>
          <label>
            Search by:
            <input
              type="radio"
              name="searchCategory"
              value="name"
              checked={searchCategory === "name"}
              onChange={handleSearchCategoryChange}
            />
            Name
          </label>
          <label>
            <input
              type="radio"
              name="searchCategory"
              value="ingredients"
              checked={searchCategory === "ingredients"}
              onChange={handleSearchCategoryChange}
            />
            Ingredients
          </label>
          <label>
            <input
              type="radio"
              name="searchCategory"
              value="cuisine"
              checked={searchCategory === "cuisine"}
              onChange={handleSearchCategoryChange}
            />
            Cuisine
          </label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter search query"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            style={{fontSize:"1rem",padding:"0.5rem",margin:"0.5rem",borderRadius:"0.75rem"}}
          />
        </div>
      </div>
      <div className="RecipeContainer">
        {filteredRecipes.map((item) => {
          return (
            <div className="RecipeCard" key={item.name}>
                <NavLink style={{textDecoration:"none",color:"black"}} to={`/${item.name}`}>
              <img
                style={{
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                  height: "200px",
                  width: "300px"
                }}
                src={item.image}
                alt="recipe"
              />
              <h2>{item.name}</h2>
              <div>
                <strong>Cuisine: </strong>
                {item.cuisine}
              </div>
              <div>
                <strong>Ingredients: </strong>
                <button className="seemore">See Recipe &gt;</button>
              </div>
              <div>
                <strong>Instructions: </strong>
                <button className="seemore">See Recipe &gt;</button>
              </div>
              </NavLink>
              <div>
                <button
                  className="addbutton"
                  onClick={() => openEditModal(item)}
                >
                  Edit
                </button>
                <button
                  className="addbutton"
                  onClick={() => deleteRecipe(item.name)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showAddModal && <AddRecipeModal closeModal={closeAddModal} />}
      {showEditModal && (
        <EditRecipeModal
          recipeData={selectedRecipe}
          closeModal={closeEditModal}
        />
      )}
    </div>
  );
};
