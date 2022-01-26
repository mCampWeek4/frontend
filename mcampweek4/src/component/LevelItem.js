import './LevelItem.css';
import BeginnerLevel from '../assets/images/BeginnerLevel.svg';
import IntermediateLevel from '../assets/images/IntermediateLevel.svg';
import AdvancedLevel from '../assets/images/AdvancedLevel.svg';
import React, { useState, useEffect } from 'react';

export default function LevelItem({item, level, setLevel}) {
    const [isSelected, setIsSelected] = useState(false);
    const selectLevel = () => {
        if(level.includes(item)) {
            setLevel(level.filter((chk) => chk !== item))
        }
        else {
            setLevel([...level, item]);
        }
        
    }
    const levelText = ['초급', '중급', '고급'];
    useEffect(()=>{
        if(level.includes(item)) setIsSelected(true);
        else setIsSelected(false);
    },[level])
    const selected = isSelected ? "selectedLevelItem" : "";
    const imgList = {
        '1': <img className="levelItemImage" src={BeginnerLevel} alt="level img"/>,
        '2': <img className="levelItemImage" src={IntermediateLevel} alt="level img" />,
        '3': <img className="levelItemImage" src={AdvancedLevel} alt="level img"/>
    }
    return(
        <div className="levelItemWrapper">
            <button className={`levelItemButton ${selected}`} onClick={selectLevel}>
                <div className="levelItemBox">
                    {imgList[item]}
                </div>
                <p className="levelItemName">{levelText[parseInt(item) - 1]}</p>
                
            </button>
            
            
            
        </div>
        
    );
};