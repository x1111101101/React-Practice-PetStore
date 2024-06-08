import React from "react";

export default function Img(props) {
    return (
        <div className="imgwrap" style={{background: "url(" + props.src + ") no-repeat", backgroundSize: "contain", backgroundPosition: "center"}}>
            
        </div>
    )
}