import React from 'react';

export default function FoodContainer({foods}) {

    // {name, description, url}           {name, time, level, classStyle, description, url}
    // const levelItem = (level) => {
    //     for (let i = 0; i < level; i++) {
                        
    //     }
    // }
    // const createFoodContainer = (foods) => {
    //     if(foods.length === 0 ) return <></>;
    //     else{
    //         return (
    //             <div>
    //             {foods.map(food => 
    //                 <div className='food-container'>
    //                     <p>{food.imageUrl}</p>
    //                     <img alt='food-pic' src={food.imageUrl} />
    //                     <div className="food-name">{food.name}</div>
    //                     <div className="food-decription">{food.description}</div>
    //                 </div>
    //              )}
    //              </div>

    //         )
    //     }

    return (
        <div>
        {
            (foods === [] ) ? <></> :
                    <div>
                    {foods.map(food => 
                        <div className='food-container'>
                            <p>{food.imageUrl}</p>
                            <img alt='food-pic' src={food.imageUrl} />
                            <div className="food-name">{food.name}</div>
                            <div className="food-decription">{food.description}</div>
                        </div>
                    )}
                    </div>
        }
        </div>
    )
}