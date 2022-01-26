import React, { useEffect, useState } from 'react';
import './Search.css';
import queryString from 'query-string';
import {useLocation} from 'react-router-dom';
import {fetchRecipe} from '../libs/newapi';
import RecipeList from '../component/RecipeList';
import PageHeader from '../component/PageHeader';

export default function Search({tabBarList, setTabBarList}) {
    const token = window.localStorage.getItem("token");
    const location = useLocation();
    const query = queryString.parse(location.search);
    console.log(query.ingredients);
    const [recipeList, setRecipeList] = useState([]);
    useEffect(()=>{
        const init = async() => {
            let res = await fetchRecipe(query.ingredients, query.level, query.time, token);
            setRecipeList(res);
        }
        init();
    }, [])
 
    return (
        <div>
            <PageHeader tabBarList={tabBarList} setTabBarList={setTabBarList} />
            <h1>검색 결과 화면</h1>
            <div className="recipeListContainer">
                <RecipeList recipeList={recipeList} queryString={query.ingredients} />
            </div>
            
        </div>
    )
}   