import React from 'react';
import { Link } from 'react-router-dom';
import { newMockServer } from '../MockServer';
import { useApp } from '../context/AppContext';

import "./Page.css"

function Category(props) {
    let category = props.category
    return (<div><label className="categoryName">{category.name}</label></div>)
}

export default function Header(props) {
    let server = useApp().server
    let categories = server.getCategories()
    return (
        <div className="header">
            {categories.map(c=><Category key={c.name} category={c}/>)}
        </div>
    );
}
