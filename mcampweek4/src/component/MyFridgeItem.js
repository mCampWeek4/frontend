import React, {useState, useEffect} from 'react';
import { fetchIngredientItem, deleteFridgeIngredient } from '../libs/newapi';


export default function MyFridgeItem ({id, reload, setReload}) {
    // console.log('asd: ' + id);
    const token = window.localStorage.getItem("token");
    const userId = window.localStorage.getItem("userId");
    const [item, setItem] = useState();
    useEffect(() => {
        const init = async() => {
        let result = await fetchIngredientItem(id.ingredientIdFridge, token);
        setItem(result[0]);
        }
        init();
    }, [id])
    const deleteIngredient = async() => {
        await deleteFridgeIngredient(userId, id.ingredientIdFridge, token);
        setReload(!reload);
    }
    if(item == null) return null
    return(
        <button className="selectedIngredientItemButton" onClick={deleteIngredient}>
            <div className="selectedIngredientItemBox">
                <img className="selectedIngredientItemImage" src={item.imageUrl} />
            </div>
            <p className="selectedIngredientItemName">{item.name}</p>    
        </button>
        
    );
}