import React, {useEffect, useState} from 'react';
import HomeHeader from './../component/HomeHeader';
import { fetchAllFood } from './../libs/newapi';
import NameContainer from './../component/NameContainer';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import FoodContainer from './../component/FoodContainer';
import './FoodSearch.css';


export default function FoodSearch() {


    const tabBarList = [{active: true, title: "레시피 검색", link:'/'}, {active: false, title: "다른 탭", link: '/FoodSearch'}];

    const [foods, setFoods] = useState([]);
    const [all, setAll] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');

    console.log("Food search running");

    // const getDataFromAPI = () => {
    //     console.log("Options Fetched from API");
    //     const token = window.localStorage.getItem("token");
    //     const ans = fetchAllFood(token);
    //     console.log(ans);
        
    //     for(var i=0; i < ans.length; i++){
    //         console.log(ans[i].name);
    //         myOptions.push(ans[i].name);
    //     }
    //     setMyOptions(myOptions);    
    // }
    useEffect(async() => {
        console.log("Options Fetched from API");
        const token = window.localStorage.getItem("token");
        const ans = await fetchAllFood(token);
        
        for(var i=0; i < ans.length; i++){
            foods.push(ans[i].name);
        }
        console.log(ans[0].url);
        setFoods(foods);
        setAll(ans);
    }, []);

    const editSeachTerm = (e) => {
        setsearchTerm(e.target.value);
    }

    const dynamicSearch = (e) => {
        if(searchTerm === '') return [];
        else return foods.filter(food => food.toLowerCase().includes(searchTerm.toLowerCase()) );
    }

    const dynamicSearchAll = (e) => {
        if(searchTerm === '') return [];
        else return all.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()) );
    }
    



    // const token = window.localStorage.getItem("token");
    // const ans = fetchAllFood(token);
    // console.log(ans);


    return (
        <>
        <HomeHeader tabBarList={tabBarList}/>
            <div className="searchWrapper">
                <div className="field">
                <input className="foodInput" type='text' value={searchTerm} onChange={editSeachTerm} placeholder='음식 입력'/>
                </div>
                <NameContainer names={dynamicSearch()} />
            </div>
            <div className="foodWrapper"> 
            <FoodContainer foods={dynamicSearchAll()}/>
            </div> 
        </>
        
    )
}


    // const token = window.localStorage.getItem("token");
    // console.log(token);
    // console.log("FoodSearch functioning");
    // // const ans = fetchAllFood(token);
    // const ans = fetchIngredient(4 ,token);
    // console.log(token);
    // console.log(ans);