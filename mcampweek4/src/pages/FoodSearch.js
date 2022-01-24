import React, {useEffect, useState} from 'react';
import HomeHeader from './../component/HomeHeader';
import { fetchIngredient } from './../libs/newapi';

export default function FoodSearch() {
    const tabBarList = [{active: true, title: "레시피 검색", link:'/'}, {active: false, title: "다른 탭", link: '/FoodSearch'}];
    
    const token = window.localStorage.getItem("token");
    console.log(token);
    console.log("FoodSearch functioning");
    // const ans = fetchAllFood(token);
    const ans = fetchIngredient(4 ,token);
    console.log(token);
    console.log(ans);


    return (
        <>
        <HomeHeader tabBarList={tabBarList}/>
        <div>
            <h1>이제 다시 시작!</h1>
        </div>
        </>
        
    )
}