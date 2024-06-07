import React, { useState, useEffect, useContext } from 'react';
import StandardPage from "../StandardPage"

import "./MainPage.css"
import { useApp } from '../../context/AppContext';



function AdSlider(props) {
	let [idx, setIdx] = useState(0)
	let app = useApp()
	let ads = app.server.getAds()
	let ad = ads[idx]
	
	let timerTaskId = -1;

	let component = (<MainPageItem>
		<div className="main-adslider">
			<img key={ad.name} src={ad.img}></img>
		</div>
	</MainPageItem>)

	useEffect(() => {
        timerTaskId = setInterval(()=>{
			console.log("TICK")
			setIdx((idx+1)%ads.length)
		}, 5000)
    }, [component]);
	useEffect(() => {
		return function cleanup() {
			if(timerTaskId != -1)
		  		clearInterval(timerTaskId)
		};
	});
	
	return component
}

function MainPageItem(props) {
	return (<div className="main-item">
		{props.children}
	</div>)
}

export default function MainPage(props) {
	
	return (
		<StandardPage>
			<div className="main">
				<AdSlider/>
			</div>
			<h3>메인페이지 입니다.</h3>
		</StandardPage>
	);
};