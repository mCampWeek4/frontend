import React, {useEffect, useState} from 'react';
import PageHeader from '../component/PageHeader';
import AllIngredientList from '../component/AllIngredientList';
import SelectedIngredientList from '../component/SelectedIngredientList';
import './MyFridge.css';
import {fetchAllFridgeIngredient, addFridgeIngredient, deleteFridgeIngredient, fetchAllIngredient} from '../libs/newapi';

export default function MyFridge({tabBarList, setTabBarList}) {
    const [list, setList] = useState([]);
    const [selectedList, setSelectedList] = useState([]);
    const [level, setLevel] = useState([]);
    const [time, setTime] = useState('')
    const [query, setQuery] = useState('');

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
                console.log("my ingredient");
                console.log(myIngredientIds)
                setSelectedList(myIngredientIds);
            }
        
        }
        init();
    }, []);
    // console.log('List: ')
    // console.log(list);


    useEffect(() => {
        var ingredientIds = '';
        selectedList.map((item) => {
            if(ingredientIds === '') ingredientIds += item.id;
            else ingredientIds += ',' + item.id;
        });
        setQuery('/Search?ingredients='+ingredientIds + '&level=' + level + '&time=' + time);
    }, [selectedList, level, time])
    

    return (
        <div className="homePageWrapper">
            <header className="PageHeader">
                <PageHeader tabBarList={tabBarList} setTabBarList={setTabBarList}/>

            </header>
            <main>
                <div className="myIngredientList">
                    <h2 className="articleTitle">전체 재료</h2>
                    <AllIngredientList list={list} setList={setList} selectedList={selectedList} setSelectedList={setSelectedList}/>
                </div>
                <div className="filter">
                    <div className="selectedIngredientList">
                        <h2 className="articleTitle">내 재료</h2>
                        <SelectedIngredientList selectedList={selectedList} setSelectedList={setSelectedList}/>
                    </div>
                </div>
            </main>
            
        </div>
    )
}