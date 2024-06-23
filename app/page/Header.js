import React from 'react';
import { Link } from 'react-router-dom';
import { newMockServer } from '../MockServer';
import { useApp } from '../context/AppContext';
import searchImage from '../../public/images/icon/search.png'; 
import cartImage from '../../public/images/icon/cart.png'; 
import Img from '../component/Img';

import "./Page.css"

function Category(props) {
    let category = props.category
    console.log(category)
    return (<div><label className="categoryName">{category.name}</label></div>)
}

function Icon(props) {
    return <div component={Link} to={props.to} className="header-icon">
        {props.children}
    </div>
}

function SearchButton(props) {
    return (
        <Icon>
            <img src={searchImage}></img>
        </Icon>
    )
}

function CartButton(props) {
    return (
        <Icon>
            <img src={cartImage}></img>
        </Icon>
    )
}

export default function Header(props) {
    let server = useApp().server
    return (
        <div className="header">
            <label>Pet Store</label>
            <div className="header-right">
                <SearchButton/><CartButton/>
            </div>
        </div>
    );
}
