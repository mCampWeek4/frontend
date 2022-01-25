import AllIngredientItem from './AllIngredientItem';
import './IngredientList.css';
import {fetchIngredientItem} from '../libs/newapi';
import {useState} from 'react';

export default function AllIngredientList({list, selectedList, setSelectedList}) {
    
    
    console.log(list);
    if(list.length === 0) return null;
    
    return(
        <div className="ingredientListBox">
            {list.map((id) => {
                // console.log(item[0]);
                if(id !== undefined) {
                    return <AllIngredientItem id={id.id} selectedList={selectedList} setSelectedList={setSelectedList}/>
                }
                else return null;
            })}
        </div>
    );
};