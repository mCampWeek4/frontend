import React from 'react';
import MyFridgeItem from './MyFridgeItem';

export default function MyFridgeList({myIngredient, reload, setReload}) {
    console.log(myIngredient);
    if(myIngredient.length === 0) return null;
    
    return(
        <div className="ingredientListBox">
            {myIngredient.map((id) => {
                if(id !== undefined) {
                    return <MyFridgeItem id={id} reload={reload} setReload={setReload}/>
                }
                else return null;
            })}
        </div>
    );
}