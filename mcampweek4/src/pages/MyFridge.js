import React, {useEffect, useState} from 'react';
import PageHeader from '../component/PageHeader';
import AllIngredientList from '../component/AllIngredientList';
import './MyFridge.css';
import {fetchAllFridgeIngredient, addFridgeIngredient, deleteFridgeIngredient, fetchAllIngredient} from '../libs/newapi';
import MyFridgeList from '../component/MyFridgeList';
import Search from './Search';

export default function MyFridge({tabBarList, setTabBarList}) {
    const [list, setList] = useState([]);
    const [myIngredient, setMyIngredient] = useState([]);
    const [reload, setReload] = useState(false);
    const [searchText, setSearchText] = useState('');

    const editSearchText = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(()=> {
        const init = async() => {
            
            const userId = window.localStorage.getItem("userId");
            const token = window.localStorage.getItem("token")
            if(token) {
                const res = await fetchAllIngredient(token);
                console.log("myFridge");
                console.log(res);
                if(searchText == '') setList(res);
                else {
                    setList(res.filter((item) => {
                        return item.name.toLowerCase().includes(searchText);
                    }));
                }
                

                const res2 = await fetchAllFridgeIngredient(userId, token);
                const myIngredientIds = res2.myIngredient;
                setMyIngredient(myIngredientIds);
            }
        
        }
        init();
    }, [reload, searchText]);
    return (
        <div className="homePageWrapper">
            <header className="PageHeader">
                <PageHeader tabBarList={tabBarList} setTabBarList={setTabBarList}/>

            </header>
            <main>
                <div className="field">
                    <input className="foodInput" type='text' value={searchText} onChange={editSearchText} placeholder='재료 찾기'/> 
                </div>
                
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