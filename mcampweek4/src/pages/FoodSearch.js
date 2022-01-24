import React, {useEffect, useState} from 'react';
import HomeHeader from './../component/HomeHeader';

export default function FoodSearch() {
     const tabBarList = [{active: true, title: "레시피 검색", link:'/'}, {active: false, title: "다른 탭", link: '/FoodSearch'}];
    
    c



    return (
        <>
        <HomeHeader tabBarList={tabBarList}/>
        <div>
            <h1>이제 다시 시작!</h1>
        </div>
        </>
        
    )
}