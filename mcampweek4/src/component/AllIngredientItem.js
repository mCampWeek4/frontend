import './IngredientItem.css';
import {useEffect, useState} from 'react';
import {addFridgeIngredient, deleteFridgeIngredient} from '../libs/newapi';

export default function IngredientItem({item, myIngredient, setMyIngredient, reload, setReload}) {
    const token = window.localStorage.getItem("token");
    const userId  = window.localStorage.getItem("userId");
    const [isSelected, setIsSelected] = useState(false);

    const selectItem = async() => {
        var include = false;
        myIngredient.map((chk) => {
            if(item.id === chk.ingredientIdFridge) include = true;
        })
        if(!include) {
            await addFridgeIngredient(userId, item.id, token);
            console.log('added¡¡')

        setReload(!reload);
        }
        else {
            await deleteFridgeIngredient(userId, item.id, token);

        setReload(!reload);
        }
        // console.log(myIngredient)
        // console.log(typeof(myIngredient))
    }

    useEffect(()=>{
        var include = false;
        myIngredient.map((chk) => {
            if(item.id === chk.ingredientIdFridge) include = true;
        })
        if(include){
            setIsSelected(true);
        } 
        else{
            setIsSelected(false);
        } 
    },[myIngredient]);
    
    const buttonStyle = isSelected ? "selected" : "";
    if(item === undefined) return null;
    return(
        <button className={`ingredientItemButton ${buttonStyle}`} onClick={selectItem}>
            <div className="ingredientItemBox">
                <img className="ingredientItemImage" src={item.imageUrl} />
            </div>
            <p className="ingredientItemName">{item.name}</p>
        </button>
    )
};