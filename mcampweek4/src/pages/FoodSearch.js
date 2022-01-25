import React, {useEffect, useState} from 'react';
import HomeHeader from './../component/HomeHeader';
import { fetchAllFood } from './../libs/newapi';
import NameContainer from './../component/NameContainer';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';



export default function FoodSearch() {


    // const tabBarList = [{active: true, title: "레시피 검색", link:'/'}, {active: false, title: "다른 탭", link: '/FoodSearch'}];

    const [foods, setFoods] = useState([]);
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
            console.log(ans[i].name);
            foods.push(ans[i].name);
        }
        setFoods(foods);
    }, []);

    const editSeachTerm = (e) => {
        setsearchTerm(e.target.value);
    }

    const dynamicSearch = (e) => {
        if(searchTerm === '') return [''];
        else return foods.filter(food => food.toLowerCase().includes(searchTerm.toLowerCase()) );
    }
    



    // const token = window.localStorage.getItem("token");
    // const ans = fetchAllFood(token);
    // console.log(ans);


    return (
        <>
        {/* <HomeHeader tabBarList={tabBarList}/> */}
            <div style={{textAlign: 'center', paddingTop:'30px'}}>
                <input type='text' value={searchTerm} onChange={editSeachTerm} placeholder='음식 입력'/>
                <NameContainer names={dynamicSearch()} />
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