import React from 'react';
import {Link} from 'react-router-dom';
import './TabBarItem.css';


export default function TabBarItem({active, title, link, tabBarList, setTabBarList}) {
    const onClick = () => {
        setTabBarList(tabBarList.map((item) => {
            if(title === item.title) 
            return {...item, active: true};
            else return {...item, active: false};
        }))
    }
    const style = active ? 'active' : '';
    return (
        <Link to={link} style={{textDecoration: 'none'}}  onClick={onClick}>
            <div className={`${style}Wrapper`}>
                <p className={"title " + style}>
                    {title}
                </p>
            </div>
        </Link>
        
    )
}