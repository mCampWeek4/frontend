import React, {useEffect, useState} from 'react'
import './RecipeItem.css';
import {fetchMoreRecipe} from '../libs/newapi';

export default function RecipeItem ({item, recipeId, queryString}) {
    const token = window.localStorage.getItem("token");
    // var ans;
    // var ansString = "abc";
    const [ansString, setAnsString] = useState('');

    useEffect(()=> {
        const init = async () => {
            var ans;
            if(recipeId !== undefined) {ans = await fetchMoreRecipe(queryString, parseInt(recipeId), token);}
            console.log(ans);
            var t = '부족한 재료 ' + ans.length + '개: ';
            for(var i = 0; i < ans.length ; i++) {
                if(i < ans.length - 1) {
                    t += ans[i].Ingredient.name + ', ';
                }
                else t += ans[i].Ingredient.name
                
            }
            setAnsString(t)
            console.log(t)
        }
        init();
    }, [])

    // let ansString = '부족한 재료 ' + ans.length + '개: ';

    // for(let i=0; i < ans.length; i++){
    //     ansString += ans[i].Ingredient.name + ', ';
    // }
    // console.log(ansString)

    const level = {1: 'easy', 2: 'medium', 3: 'hard'}
    return (
        <div className={`recipeWrapper ${level[item.level]}`} onClick={() => {window.open(item.url)}}>
            <div className="recipeImageWrapper">
                <img src={item.imageUrl} alt="recipe image" className="recipeImage"/>
            </div>
            
            <p className="recipeName">{item.name}</p>
            <p className="recipeDescription">{item.description}</p>
            <p className="moreIngredient">{ansString}</p>
            <div className="foodTimeWrapper">
                <p className="foodTime">{item.time + '분 소요'}</p>
            </div>
            
        </div>
    )
}