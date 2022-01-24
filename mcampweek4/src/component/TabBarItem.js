import React from 'react';
import {Link} from 'react-router-dom';
import './TabBarItem.css';


export default function TabBarItem({active, title, link}) {
    const style = active ? 'active' : '';
    return (
        <Link to={link} style={{textDecoration: 'none'}}>
            <div className={`${style}Wrapper`}>
                <p className={"title " + style}>
                    {title}
                </p>
            </div>
        </Link>
        
    )
}