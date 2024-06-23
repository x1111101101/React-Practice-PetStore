import React, {useState} from "react";
import StandardPage from "../StandardPage";
import { Categories } from "../main/MainPage";

import "./CategoryPage.css"

export default function CategoryPage(props) {

    return (
        <StandardPage>
            <div className="page-category">
                <Categories/>
            </div>
        </StandardPage>
    )
}