import IngredientItem from './IngredientItem';
import './IngredientList.css';

export default function IngredientList() {
    return(
        <div class="ingredientListBox">
            <IngredientItem name={"계란"}/>
            <IngredientItem name={"양파"}/>
            <IngredientItem name={"마늘"}/>
            <IngredientItem name={"김치"}/>
            <IngredientItem name={"밥"}/>
        </div>
    );
};