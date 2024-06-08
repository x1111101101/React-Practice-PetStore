import React, { useState, useEffect, useContext } from 'react';
import StandardPage from "../StandardPage"

import "./MainPage.css"
import { useApp } from '../../context/AppContext';
import {CategoryIcon, CategoryGroup, CATEGORIES} from '../../component/category/Category';


function AdSlide(props) {
	let ad = props.ad
	let display = props.active ? "block" : "none"
	return (
		<div className="main-ad">
			<img loading="lazy" key={ad.name} src={ad.img} style={{display: display}}></img>
		</div>
	)
}

function AdSlider(props) {
	let [idx, setIdx] = useState(0)
	let app = useApp()
	let ads = app.server.getAds()
	let adElements = []
	for(let i in ads) {
		let ad = ads[i]
		adElements.push(<AdSlide key={ad.name} ad={ad} active={parseInt(i)==idx}/>)
	}
	
	let timerTaskId = -1;

	let component = (<MainPageItem>
		<div className="main-adslider">
			{adElements}
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

export function Categories(props) {
	return (
		<MainPageItem>
		<div className="main-categories">
			<div className="main-category-groups-wrap">
				<CategoryGroup>
					<CategoryIcon category={CATEGORIES["사료"]}/>
					<CategoryIcon category={CATEGORIES["간식"]}/>
					<CategoryIcon category={CATEGORIES["장난감"]}/>
					<CategoryIcon category={CATEGORIES["미용품"]}/>
				</CategoryGroup>
			</div>
			<div className="main-category-groups-wrap">
				<CategoryGroup>
					<CategoryIcon category={CATEGORIES["악세사리"]}/>
					<CategoryIcon category={CATEGORIES["의약품"]}/>
					<CategoryIcon category={CATEGORIES["목욕용품"]}/>
					<CategoryIcon category={CATEGORIES["펫하우스"]}/>
				</CategoryGroup>
			</div>
		</div>
		</MainPageItem>
		
	)
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
				<Categories/>
			</div>
		</StandardPage>
	);
};