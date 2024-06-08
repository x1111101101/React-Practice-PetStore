import React, {useState} from "react";
import ZoomedPage from "../ZoomedPage";
import { useInput } from "../../Hooks";

import "../Page.css"
import "./SignupPage.css"


function InputArea(props) {
    return (<div className="signup-input-area">
        <label>{props.name}</label>
        {props.children}
    </div>)
}

function Contract(props) {
    return (
        <div className="signup-contract">

        </div>
    )
}

function Input(props) {
    return (
        <input {...props.attr}></input>
    )
}

function NameInputArea(props) {
    return (
        <InputArea name="이름">
            <Input attr={{name: "name", type:"text", placeholder: "이름", ...props.attr}}/>
        </InputArea>
    )
}

function NicknameInputArea(props) {
    return (
        <InputArea name="닉네임">
            <Input attr={{name: "nickname", type:"text", placeholder: "닉네임", ...props.attr}}/>
        </InputArea>
    )
}

function IdInputArea(props) {
    return (
        <InputArea name="아이디">
            <Input attr={{name: "id", type:"text", placeholder: "영문/숫자 8~20자", ...props.attr}}/>
        </InputArea>
    )
}

function PasswordInputArea(props) {
    return (
    <InputArea name="비밀번호">
        <Input attr={{name: "password", type:"password", placeholder: "영문/숫자/특수문자 혼합 8~20자", ...props.attrPassword}}/>
        <Input attr={{name: "passwordCheck", type:"password", placeholder: "비밀번호를 한번 더 입력해주세요", ...props.attrPasswordCheck}}/>
    </InputArea>)
}


function ContractTab(props) {
    let agreeA = useInput(false)
    return (<div className="signup-contract-tab">
        

    </div>)
}


export default function SignupPage(props) {
    let [inputs, setInputs] = useState({id: '', password: '', passwordCheck: '', name: '', nickname: ''})
    let onChange = (e)=> {
        let name = e.target.name
        let value = e.target.value
        let newInputs = {...inputs}
        newInputs[name] = value
        setInputs(newInputs)
    }
    return (<ZoomedPage title="회원가입">
        <div className="signup">
            <IdInputArea attr={{onChange: onChange, value: inputs.id}}/>
            <PasswordInputArea attrPassword={{onChange: onChange, value: inputs.password}} attrPasswordCheck={{onChange: onChange, value: inputs.passwordCheck}}/>
            <NameInputArea attr={{onChange: onChange, value: inputs.name}}/>
            <NicknameInputArea attr={{onChange: onChange, value: inputs.nickname}}/>
            <ContractTab/>
        </div>
    </ZoomedPage>)
}