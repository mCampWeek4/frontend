import React from 'react';
import RecipeItem from './RecipeItem';
import './RecipeList.css';

export default function RecipeList({recipeList}) {
    console.log(recipeList)
    return (
        <div className="recipeListWrapper">
            {
                recipeList.map((item) => {
                    // console.log(item.RecipeDescription)
                    return <RecipeItem item={item} />
                })
            }
        </div>
    )
}