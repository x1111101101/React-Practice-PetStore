import React from "react";
import Page from "./Page";

import { useNavigate, Link } from "react-router-dom";

import IMG_BACKWARD from "../../public/images/icon/back.png"
import IMG_HOME from "../../public/images/icon/home2.png"

function HeaderItem(props) {
    return (
        <div className="zoomed-page-header-item" {...props.attr}>
            {props.children}
        </div>
    )
}

function HomeIcon(props) {
    return (
        <HeaderItem>
            <Link to="/home">
                <img src={IMG_HOME}></img>
            </Link>
        </HeaderItem>
    )
}

function BackwardIcon(props) {
    const navigate = useNavigate();
    return (
        <HeaderItem><img onClick={(e)=>{e.preventDefault(); navigate(-1);}} style={{height: "5vh", width: "3.5vh"}} src={IMG_BACKWARD}></img></HeaderItem>
    )
}

function ZoomedPageHeaderLeft(props) {
    return (
        <div className="zoomed-page-header-left">
            <BackwardIcon/><HomeIcon/>
        </div>
    )
}

function ZoomedPageHeader(props) {
    return (<div className="zoomed-page-header">
        {props.items}
    </div>)
}

function ZoomedPageFooter(props) {
    return (<div>

    </div>)
}

function HeaderTitle(props) {
    return (
        <HeaderItem attr={{style: {alignSelf: "center"}}}>
            <label>
                {props.title}
            </label>
        </HeaderItem>
    )
}

export default function ZoomedPage(props) {
    let headerItems = [<ZoomedPageHeaderLeft/>, <HeaderTitle title={props.title}/>]
    return (<Page key={props.title}>
        <div className="zoomed-page">
            <ZoomedPageHeader items={headerItems}/>
            <div className="zoomed-page-content">
                {props.children}
            </div>
            <ZoomedPageFooter/>
        </div>
    </Page>)
}