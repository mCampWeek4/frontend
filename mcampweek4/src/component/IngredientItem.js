import './IngredientItem.css';
import {useEffect, useState} from 'react';

export default function IngredientItem({item, selectedList, setSelectedList}) {
    const [isSelected, setIsSelected] = useState(false);
    const selectItem = () => {
        if(!selectedList.includes(item)) {
            setSelectedList([...selectedList, item])
        }
        else {
            setSelectedList(selectedList.filter((chk) => chk !== item))
        }
        console.log(selectedList)
        console.log(typeof(selectedList))
    }
    useEffect(()=>{
        if(selectedList.includes(item)) setIsSelected(true);
        else setIsSelected(false);
    },[selectedList])
    const buttonStyle = isSelected ? "selected" : "";
    return(
        <button className={`ingredientItemButton ${buttonStyle}`} onClick={selectItem}>
            <div className="ingredientItemBox">
                <img className="ingredientItemImage" src={item.imgSrc} />
            </div>
            <p className="ingredientItemName">{item.name}</p>
        </button>
    )
};