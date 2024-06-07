import React, {useState} from "react";


export {useInput}

function useInput(initial, validator) {
    let [state, setState] = useState(initial)
    let obj = {
        onChange: (e)=> {
            if(typeof(validator) !== "function" || validator(e)) 
                setState(e.target.value)
        },
        value: state
    }
    return obj
}