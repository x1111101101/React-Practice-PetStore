import getMockServer from "../MockServer";
import { createContext, useContext, useState } from "react";




let [slideIndex, setSlideIndex] = useState(0)


export const AdSliderContext = createContext()
export const AdSliderContextDefault = {
    ads: ads, getIndex: ()=>{return slideIndex}
}

let sliderTask = setInterval(()=>{
    let idx = (slideIndex+1)%ads.length
    console.log(idx)
    setSlideIndex(idx)
}, 5000)