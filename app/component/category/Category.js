import React from "react";
import { Link } from "react-router-dom";
import Img from "../Img";

import "./Category.css"
import "../../page/Page.css"
import IMG_CATEGORY_MEAL from "../../../public/images/icon/category/meal.png"
import IMG_CATEGORY_APPETIZER from "../../../public/images/icon/category/a.png"
import IMG_CATEGORY_TOY from "../../../public/images/icon/category/b.png"
import IMG_CATEGORY_MEDICAL from "../../../public/images/icon/category/f.png"
import IMG_CATEGORY_BEAUTY from "../../../public/images/icon/category/e.png"
import IMG_CATEGORY_ACCESSORY from "../../../public/images/icon/category/x.png"
import IMG_CATEGORY_WASHING from "../../../public/images/icon/category/k.png"
import IMG_CATEGORY_HOUSE from "../../../public/images/icon/category/h.png"

export {CategoryGroup, CategoryIcon, CATEGORIES}

let CATEGORIES = {}

function newCategory(name, img, path) {
    return {name:name,img:img,path:path}
}
CATEGORIES["사료"] = newCategory("사료", IMG_CATEGORY_MEAL, "")
CATEGORIES["간식"] = newCategory("간식", IMG_CATEGORY_APPETIZER, "")
CATEGORIES["장난감"] = newCategory("장난감", IMG_CATEGORY_TOY, "")
CATEGORIES["악세사리"] = newCategory("악세사리", IMG_CATEGORY_ACCESSORY, "")
CATEGORIES["미용품"] = newCategory("미용품", IMG_CATEGORY_BEAUTY, "")
CATEGORIES["의약품"] = newCategory("의약품", IMG_CATEGORY_MEDICAL, "")
CATEGORIES["펫하우스"] = newCategory("펫하우스", IMG_CATEGORY_HOUSE, "")
CATEGORIES["목욕용품"] = newCategory("목욕용품", IMG_CATEGORY_WASHING, "")

function CategoryGroup(props) {
	return (
	<div className="category-row">
		{props.children}
	</div>)
}


function CategoryIcon(props) {
    let category = props.category
    return <div className="category-icon">
        <div to={category.path} className="category-icon-inner a-none-decoration">
            <Img src={category.img}></Img>
            <label>{category.name}</label>
        </div>
    </div>
}