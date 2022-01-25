import React from 'react';
import {Link} from 'react-router-dom';
import TabBarItem from './TabBarItem';
import './HeaderTabBar.css';

export default function HeaderTabBar({tabBarList, setTabBarList}) {
    // console.log('asd')
    // console.log(tabBarList)
    // console.log('123')
    return (
        <div className="tabBarWrapper">
            {tabBarList.map((item) => {
                return <TabBarItem tabBarList={tabBarList} setTabBarList={setTabBarList} active={item.active} title={item.title} link={item.link}/>
            })}
        </div>
    )
}
