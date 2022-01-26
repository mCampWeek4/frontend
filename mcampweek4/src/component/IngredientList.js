import IngredientItem from './IngredientItem';
import './IngredientList.css';
import {fetchIngredientItem} from '../libs/newapi';
import {useState} from 'react';

export default function IngredientList({list, selectedList, setSelectedList}) {
    
    
    // console.log(list);
    if(list.length === 0) return null;
    
    return(
        <div className="ingredientListBox">
            {list.map((id) => {
                // console.log(item[0]);
                if(id !== undefined) {
                    return <IngredientItem id={id.ingredientIdFridge} selectedList={selectedList} setSelectedList={setSelectedList}/>
                }
                else return null;
            })}
        </div>
    );
};