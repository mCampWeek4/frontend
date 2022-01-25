import LevelItem from './LevelItem';
import './LevelList.css';


export default function LevelList({level, setLevel}) {
    const levelList = ["1", "2", "3"];
    return(
        <div className="levelListBox">
            {levelList.map((item) => {
                return <LevelItem item={item} level={level} setLevel={setLevel}/>
            })}
        </div>
    );
};