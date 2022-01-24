import React from 'react';
import './CookingTimeItem.css';


export default function CookingTimeItem({item, time, setTime}) {
    const selectTime = () => {
        setTime(item);
    }
    const selected = item === time ? "selectedTimeItem" : "";
    return (
        <div className="timeItemBox">
            <button className={`timeItemButton ${selected}`} onClick={selectTime}>
                <p className="timeText">{item}</p>
                <p className="discriptionText">분</p>
                <p className="discriptionText">이하</p> 
            </button>
            
        </div>
    )
}