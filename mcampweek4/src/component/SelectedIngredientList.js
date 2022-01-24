import SelectedIngredientItem from './SelectedIngredientItem';
import './SelectedIngredientList.css';

export default function SelectedIngredientList({selectedList, setSelectedList}) {
    return(
        <div className="selectedIngredientListBox">
            {selectedList.map((item) => {
                return <SelectedIngredientItem item={item} selectedList={selectedList} 
                setSelectedList={setSelectedList} />
            })}
        </div>
    );
};