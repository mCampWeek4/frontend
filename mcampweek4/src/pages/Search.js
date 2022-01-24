import React from 'react';
import './Search.css';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';

export default function Search() {
    const location = useLocation();
    const query = queryString.parse(location.search);
    console.log(query.ingredients.split('.'));
    var ingredients = query.ingredients.split('.');
    // const requestIngredients
    // ingredients.map((item) => {
    //     if(item === '') 
    // })

    return (
        <div>
            <h1>검색 결과 화면</h1>
        </div>
    )
}   