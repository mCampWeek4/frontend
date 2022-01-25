import React from 'react';
import './CookingTimeItem.css';


export default function CookingTimeItem({item, time, setTime}) {
    const selectTime = () => {
        setTime(item);
    }
    const selected = item === time ? "selectedTimeItem" : "";
    const text = item !== '60000' ? 
    <button className={`timeItemButton ${selected}`} onClick={selectTime}>
        <p className="timeText">{item}</p>
        <p className="discriptionText">분</p>
        <p className="discriptionText">이하</p> 
    </button>:
    <button className={`timeItemButton ${selected}`} onClick={selectTime}>
        <p className="timeText">상관</p>
        <p className="timeText">없음</p>
    </button>;
    return (
        <div className="timeItemBox">
            {text}
            
        </div>
    )
}