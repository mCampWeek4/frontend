import React from 'react';
import './FoodContainer.css';
import RecipeSearchList from './RecipeSearchList';

export default function FoodContainer({foods}) {
    console.log(foods);
    return (
        <>
        {
            (foods === [] ) ? <></> :
                    <>
                    {/* {foods.map(food => 
                        <div className='food-container'>
                            <img alt='food-pic' src={food.imageUrl} width='300px' height='400px' />
                            <div className="food-name">{food.name}</div>
                            <div className="food-decription">{food.description}</div>
                        </div>

                    )} */}
                    <RecipeSearchList recipeList={foods}/>
                    </>
        }
        </>
    )
}