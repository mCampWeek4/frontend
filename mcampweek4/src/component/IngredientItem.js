import './IngredientItem.css';
import {useEffect, useState} from 'react';
import {fetchIngredientItem} from '../libs/newapi';

export default function IngredientItem({id, selectedList, setSelectedList}) {
    const token = window.localStorage.getItem("token");
    const [isSelected, setIsSelected] = useState(false);
    const [item, setItem] = useState();
    useEffect(async() => {
        let result = await fetchIngredientItem(id, token);
        setItem(result[0]);
        // console.log(result);
    }, [])
    const selectItem = () => {
        if(!selectedList.includes(item)) {
            setSelectedList([...selectedList, item])
        }
        else {
            setSelectedList(selectedList.filter((chk) => chk !== item))
        }
        // console.log(selectedList)
        // console.log(typeof(selectedList))
    }
    useEffect(()=>{
        if(selectedList.includes(item)) setIsSelected(true);
        else setIsSelected(false);
    },[selectedList])

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