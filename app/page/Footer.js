import React from "react";
import "./Page.css"

import IMG_CATEGORY from "../../public/images/icon/items.png"
import IMG_USER from "../../public/images/icon/user.png"
import IMG_HOME from "../../public/images/icon/home.png"

function FooterIcon(props) {
    return <div className="footer-icon">
        {props.children}
        <label>{props.iconName}</label>
    </div>
}

export default function Footer(props) {

    return (<div className="footer">
        <FooterIcon iconName="홈"><img src={IMG_HOME}></img></FooterIcon>
        <FooterIcon iconName="카테고리"><img src={IMG_CATEGORY}></img></FooterIcon>
        <FooterIcon iconName="로그인/회원가입"><img src={IMG_USER}></img></FooterIcon>
    </div>)
}