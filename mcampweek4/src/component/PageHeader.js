import React from 'react';
import './PageHeader.css';
import {Link} from 'react-router-dom';
import HeaderTabBar from './HeaderTabBar';


export default function PageHeader({tabBarList, setTabBarList}) {
    // console.log(tabBarList)
     return (
         <div className="headerWrapper">
            <div className="headerBox">
                <div className="logo">
                    <p className="large orange bold">냉장고</p>
                    <p className="small orange bold">를</p>
                    <p className="large orange bold">부탁해</p>
                </div>
                <div className="headerTabBarWrapper">
                    <HeaderTabBar tabBarList={tabBarList} setTabBarList={setTabBarList}/>
                    <Link to='/Login' style={{textDecoration: 'none'}}>
                        <div className="homeLogin">
                            로그인
                        </div>
                    </Link>
                </div>

                
                
            </div>
         </div>
         
     )
}