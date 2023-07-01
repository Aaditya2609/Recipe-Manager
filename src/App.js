import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { ListRecipes } from "./pages/ListRecipies";
import SingleRecipe from "./pages/SingleRecipe";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListRecipes />} />
        <Route path="/:recipeName" element={<SingleRecipe/>}/>
      </Routes>
    </div>
  );
}
