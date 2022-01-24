import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home, Login, Search, Join, FoodSearch} from './pages'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Login" element={<Login />}/>
                <Route path="/Search" element={<Search />}/>
                <Route path="/Join" element={<Join />}/>
                <Route path="/FoodSearch" element={<FoodSearch />}/>
            </Routes>
            
        </div>
    );
}

export default App;
