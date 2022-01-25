import React from 'react'
import './RecipeItem.css';

export default function RecipeItem ({item}) {

    // console.log(item)
    const level = {1: 'easy', 2: 'medium', 3: 'hard'}
    return (
        <div className={`recipeWrapper ${level[item.level]}`} onClick={() => {window.open(item.url)}}>
            <div className="recipeImageWrapper">
                <img src={item.imageUrl} alt="recipe image" className="recipeImage"/>
            </div>
            
            <p className="recipeName">{item.name}</p>
            <p className="recipeDescription">{item.description}</p>
        </div>
    )
}