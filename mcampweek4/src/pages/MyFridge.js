import React, {useEffect, useState} from 'react';
import PageHeader from '../component/PageHeader';
import AllIngredientList from '../component/AllIngredientList';
import './MyFridge.css';
import {fetchAllFridgeIngredient, addFridgeIngredient, deleteFridgeIngredient, fetchAllIngredient} from '../libs/newapi';
import MyFridgeList from '../component/MyFridgeList';

export default function MyFridge({tabBarList, setTabBarList}) {
    const [list, setList] = useState([]);
    const [myIngredient, setMyIngredient] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(()=> {
        const init = async() => {
            
            const userId = window.localStorage.getItem("userId");
            const token = window.localStorage.getItem("token")
            if(token) {
                // const res = await fetchAllFridgeIngredient(userId, token);
                // const myIngredientIds = res.myIngredient;
                // console.log(myIngredientIds)
                // setList(myIngredientIds);


                const res = await fetchAllIngredient(token);
                console.log("myFridge");
                console.log(res);
                // const allIngredientIds = res.myIngredient;
                // console.log(allIngredientIds);
                setList(res);


                const res2 = await fetchAllFridgeIngredient(userId, token);
                const myIngredientIds = res2.myIngredient;
                console.log('awsdfasdf')
                setMyIngredient(() => {
                    console.log(myIngredientIds)
                    console.log("123123123")
                    return myIngredientIds});
            }
        
        }
        init();
    }, [reload]);
    // console.log('List: ')
    // console.log(list);


    // useEffect(() => {
    //     var ingredientIds = '';
    //     myIngredient.map((item) => {
    //         if(ingredientIds === '') ingredientIds += item.id;
    //         else ingredientIds += ',' + item.id;
    //     });
    //     setQuery('/Search?ingredients='+ingredientIds + '&level=' + level + '&time=' + time);
    // }, [myIngredient, level, time])
    

    return (
        <div className="homePageWrapper">
            <header className="PageHeader">
                <PageHeader tabBarList={tabBarList} setTabBarList={setTabBarList}/>

            </header>
            <main>
                <div className="myIngredientList">
                    <h2 className="articleTitle">전체 재료</h2>
                    <AllIngredientList list={list} setList={setList} myIngredient={myIngredient} reload={reload} setReload={setReload}/>
                </div>
                <div className="filter">
                    <div className="selectedIngredientList">
                        <h2 className="articleTitle">내 재료</h2>
                        <MyFridgeList myIngredient={myIngredient} setMyIngredient={setMyIngredient} reload={reload} setReload={setReload}/>
                    </div>
                </div>
            </main>
            
        </div>
    )
}