import React, { useContext, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { RecipeContext } from '../context/RecipeContext';
import { BiArrowBack } from "react-icons/bi";

function SingleRecipe() {
    const {recipeName} =useParams();
    const {recipe}=useContext(RecipeContext)
    const [SingleRecipe,setSingleRecipe]=useState(recipe.find(item=>item.name===recipeName))

  return (
    <div>
        <div>
            <div style={{display:"flex",alignItems:'center',justifyContent:"center",gap:"0.11rem"}}>
            <button className="backbutton"><NavLink to="/" className="backbuttonnav"style={{textDecoration:"none"}}><BiArrowBack/></NavLink></button>
            <h1>{SingleRecipe.name}</h1>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"left",border:"2px solid black", borderRadius:"1rem"}}>
            <div>
                <img src={SingleRecipe.image} style={{height:"400px"}}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"1rem"}}>
                <strong style={{marginBottom:"1rem"}}>Cuisisne: {SingleRecipe.cuisine}</strong>
                <div><strong>Ingredients:</strong>
                <ul style={{listStyleType:"none",width:"100%"}}>
                  {SingleRecipe.ingredients.split("\n").map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                </div>
                <div><strong>Instructions:</strong>
                <ol >
                  {SingleRecipe.instructions.split("\n").map((ingredient, index) => (
                    <li key={index} style={{width:"fit-content"}}>{ingredient}</li>
                  ))}
                </ol>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SingleRecipe