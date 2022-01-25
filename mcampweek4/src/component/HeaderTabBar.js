import React from 'react';
import {Link} from 'react-router-dom';
import TabBarItem from './TabBarItem';
import './HeaderTabBar.css';

export default function HeaderTabBar({tabBarList}) {
    // console.log('asd')
    // console.log(tabBarList)
    // console.log('123')
    return (
        <div className="tabBarWrapper">
            {tabBarList.map((item) => {
                return <TabBarItem active={item.active} title={item.title} link={item.link}/>
            })}
        </div>
    )
}
