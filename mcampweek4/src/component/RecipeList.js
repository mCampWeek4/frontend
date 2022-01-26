import React from 'react';
import RecipeItem from './RecipeItem';
import { fetchMoreRecipe } from '../libs/newapi';
import './RecipeList.css';
import Login from './../pages/Login';

export default function RecipeList({recipeList, queryString}) {
    console.log(recipeList)
    const token = window.localStorage.getItem("token");

    return (
        <div className="recipeListWrapper">
            {
                recipeList.map((item) => {
                    // console.log(item.RecipeDescription)

                    {/* console.log(queryString);
                    console.log(item.description_id_recipe);
                    console.log(token); */}
                    {/* let ans = await fetchMoreRecipe(queryString, item.description_id_recipe, token);
                    console.log(ans);
                     */}
                    {/* let ansString = '부족한 재료 ' + ans.length + '개: ';

                    for(let i=0; i < ans.length; i++){
                        ansString += ans[i].Ingredient.name + ', ';
                    } */}
                    

                    return <RecipeItem item={item.RecipeDescription} recipeId={item.description_id_recipe} queryString={queryString} />
                })
            }
        </div>
    )
}