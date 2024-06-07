/*
name: 카테고리 이름
icon: 카테고리 아이콘 url


*/

import MOCK_IMG_SLIDE_A from "../public/images/main/slider/0.png"
import MOCK_IMG_SLIDE_B from "../public/images/main/slider/1.png"
import MOCK_IMG_SLIDE_C from "../public/images/main/slider/2.png"

function newAd(name, img, link) {
	return {name: name, img: img, link: link}
}

let ads = [];
ads.push(newAd("a", MOCK_IMG_SLIDE_A, ""))
ads.push(newAd("b", MOCK_IMG_SLIDE_B, ""))
ads.push(newAd("c", MOCK_IMG_SLIDE_C, ""))

export default function getMockServer() {
    return {
        getCategories: ()=> {
            let r = []
            r.push({name: "간식", list: ["덴탈껌", "껌", "영양/기능"]})
            r.push({name: "사료", list: ["건식", "습식", "자연식"]})
            r.push({name: "미용용품"})
            r.push({name: "패션용품"})
            return r
        },
        getAds: ()=> ads
    }
}