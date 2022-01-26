import React, { useEffect, useState } from 'react';
import './PageHeader.css';
import {Link} from 'react-router-dom';
import HeaderTabBar from './HeaderTabBar';


export default function PageHeader({tabBarList, setTabBarList}) {

//     const logout = () => {
//         console.log("logout success");
//         window.localStorage.setItem("token", null);
//         // this.props.

//     }

    const [token, setToken] = useState(window.localStorage.getItem("token"));
    useEffect(() => {
        if(token) {
            setLoggedIn(
                <Link to='/Login' style={{textDecoration: 'none'}}>
                <div className="homeLogin" onClick={logout}>
                    로그아웃
                </div>
                </Link>
                
            )
        }
        else {
            setLoggedIn(
            <Link to='/Login' style={{textDecoration: 'none'}}>
                <div className="homeLogin">
                    로그인
                </div>
            </Link>);
        }
        
    }, [token])
    const [loggedIn, setLoggedIn] = useState();
    console.log(token)
    const logout = () => {
        window.localStorage.setItem("token", null);
        window.localStorage.setItem("userId", null);
        window.localStorage.setItem("userName", null);
        setToken(window.localStorage.getItem("token"));
        setLoggedIn(<Link to='/Login' style={{textDecoration: 'none'}}>
        <div className="homeLogin">
            로그인
        </div>
    </Link>)
    }
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

                    {/* {
                        (window.localStorage.getItem("token") !== null) 
                        ?   
                        <>
                            <Link to='/MyFridge' style={{textDecoration: 'none'}}>
                                <div className="homeLogin">
                                    my 냉장고
                                </div>
                            </Link>
                            <Link to='/Login' style={{textDecoration: 'none'}}  onClick={logout}>
                                <div className="homeLogin">
                                    로그아웃
                                </div>
                            </Link>
                        </>
                        :   
                            <Link to='/Login' style={{textDecoration: 'none'}}>
                                <div className="homeLogin">
                                    로그인
                                </div>
                            </Link>
                    } */}
                    {loggedIn}
                </div>

                
                
            </div>
         </div>
         
     )
}