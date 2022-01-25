import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home, Login, Search, Join, FoodSearch, MyFridge } from './pages'

function App() {
    const [tabBarList, setTabBarList] = useState([{active: true, title: "레시피 검색", link:'/'}, {active: false, title: "다른 탭", link: '/FoodSearch'}]);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home tabBarList={tabBarList} setTabBarList={setTabBarList}/>}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Search" element={<Search  tabBarList={tabBarList} setTabBarList={setTabBarList}/>}/>
                <Route path="/Join" element={<Join />}/>
                <Route path="/FoodSearch" element={<FoodSearch  tabBarList={tabBarList} setTabBarList={setTabBarList}/>}/>
                <Route path="/MyFridge" element={<MyFridge  tabBarList={tabBarList} setTabBarList={setTabBarList}/>}/>
            </Routes>
            
        </div>
    );
}

export default App;
