import React, {useEffect, useState} from 'react';
import HomeHeader from './../component/HomeHeader';
import './ModifyFridge.css';

export default function ModifyFridge() {
    const tabBarList = [{active: true, title: "레시피 검색", link:'/'}, {active: false, title: "다른 탭", link: '/FoodSearch'}];




    return (
        <>
        <HomeHeader tabBarList={tabBarList}/>
        


        </>
    )
};
