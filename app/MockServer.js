/*
name: 카테고리 이름
icon: 카테고리 아이콘 url


*/

import MOCK_IMG_SLIDE_A from "../public/images/main/slider/a.png"
import MOCK_IMG_SLIDE_B from "../public/images/main/slider/b.png"
import MOCK_IMG_SLIDE_C from "../public/images/main/slider/c.png"

function newAd(name, img, link) {
	return {name: name, img: img, link: link}
}

let ads = [];
ads.push(newAd("a", MOCK_IMG_SLIDE_A, ""))
ads.push(newAd("b", MOCK_IMG_SLIDE_B, ""))
ads.push(newAd("c", MOCK_IMG_SLIDE_C, ""))

export default function getMockServer() {
    return {
        getAds: ()=> ads
    }
}