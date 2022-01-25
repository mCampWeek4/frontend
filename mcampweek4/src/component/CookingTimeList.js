import React, {useState} from 'react';
import CookingTimeItem from './CookingTimeItem';
import './CookingTimeList.css';

export default function CookingTimeList({time, setTime}) {
    const timeList = ['10', '20', '30', '40', '50', '60', '60000'];
    return (
        <div className="cookingTimeListBox">
            {timeList.map((item) => {
                return <CookingTimeItem item={item} time={time} setTime={setTime}/>
            })}
        </div>
    )
}