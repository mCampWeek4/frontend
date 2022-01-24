import { checkPropTypes } from 'prop-types';
import './SelectedIngredientItem.css';

export default function IngredientItem({item, selectedList, setSelectedList}) {
    const deleteIngredient = () => {
        setSelectedList(selectedList.filter((chk) => (item !== chk && chk !== undefined)));
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
};