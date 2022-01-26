import React, {useEffect, useState, useRef} from 'react';
import PageHeader from '../component/PageHeader';
import { fetchAllFood } from './../libs/newapi';
import NameContainer from './../component/NameContainer';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import FoodContainer from './../component/FoodContainer';
import './FoodSearch.css';
import Login from './Login';


export default function FoodSearch({tabBarList}) {

    const [foods, setFoods] = useState([]);
    const [all, setAll] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    const [focus, setFocus]= useState(false);


    console.log("Food search running");

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
    


    return (
        <>
        <PageHeader tabBarList={tabBarList}/>
            <div className="searchWrapper"
                onFocus= {(e) => {
                    console.log("focused on input");
                    setFocus(true);
                }}
                onBlur= {(e) => {
                    console.log("lost focus");
                    setFocus(false);
                }}>
                <div className="field" >
                <input className="foodInput" type='text' value={searchTerm} onChange={editSeachTerm} placeholder='음식 입력'
                    
                />
                </div>
                { (focus) ? <NameContainer names={dynamicSearch()} setsearchTerm={setsearchTerm} /> : <></> }
                {/* <NameContainer names={dynamicSearch()} /> */}

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