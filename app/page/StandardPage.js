import React from "react"
import Page from "./Page"
import Header from "./Header"
import Footer from "./Footer"
import "./Page.css"

export default function StandardPage(props) {
    return (<Page>
        <div className="stdpage">
            <Header/>
            <div className="stdcontent">
                {props.children}
            </div>
            <Footer/>
        </div>
        
    </Page>)
}