import AllIngredientItem from './AllIngredientItem';
import './IngredientList.css';

export default function AllIngredientList({list, myIngredient, setMyIngredient, reload, setReload}) {
    
    
    console.log(list);
    if(list.length === 0) return null;
    
    return(
        <div className="ingredientListBox">
            {list.map((item) => {
                // console.log(item[0]);
                if(item.id !== undefined) {
                    return <AllIngredientItem item={item} myIngredient={myIngredient} setMyIngredient={setMyIngredient} reload={reload} setReload={setReload}/>
                }
                else return null;
            })}
        </div>
    );
};