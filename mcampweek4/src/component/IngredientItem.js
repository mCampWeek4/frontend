import './IngredientItem.css';

export default function IngredientItem({name}) {
    return(
        <div class="ingredientItemWrapper">
            <button class="ingredientItemBox">
                <img class="ingredientItemImage" src="http://cdn.kormedi.com/wp-content/uploads/2019/11/shutterstock_324937694-580x423.jpg" />
            </button>
            <div class="ingredientItemName">
                <h3>{name}</h3>
            </div>
            
            
        </div>
        
    );
};