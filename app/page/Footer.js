import React from "react";
import {Link} from "react-router-dom"
import "./Page.css"

import IMG_CATEGORY from "../../public/images/icon/items.png"
import IMG_USER from "../../public/images/icon/user.png"
import IMG_HOME from "../../public/images/icon/home.png"
import { useApp } from "../context/AppContext";

function FooterIcon(props) {
    return <Link className="footer-icon a-none-decoration" component={Link} to={props.linkTo}>
        {props.children}
        <label style={{display: "block"}}>{props.iconName}</label>
    </Link>
}

export default function Footer(props) {
    let app = useApp()
    let [userIconPath, userIconName] = (!app.isLoggedIn) ? ["/login", "로그인/회원가입"] : ["/my", "마이페이지"]
    return (<div className="footer">
        <FooterIcon linkTo="/main" iconName="홈"><img src={IMG_HOME}></img></FooterIcon>
        <FooterIcon linkTo="/category" iconName="카테고리"><img src={IMG_CATEGORY}></img></FooterIcon>
        <FooterIcon linkTo={userIconPath} iconName={userIconName}><img src={IMG_USER}></img></FooterIcon>
    </div>)
}