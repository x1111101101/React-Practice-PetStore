import React from "react";
import { Link } from "react-router-dom";
import StandardPage from "./StandardPage";
import Page from "./Page";
import { useInput } from "../Hooks";
import ZoomedPage from "./ZoomedPage";

import "./LoginPage.css"

function LoginInput(props) {
    return (
        <div className="login-input">
            <input type={props.type} name={props.name} {...props.other}/>
        </div>
    
)
}

function LoginAreaItem(props) {
    return (
        <div className="login-area-item">
            {props.children}
        </div>
    )
}

function LoginButton(props) {
    return (
    <button>
        로그인
    </button>)
}

function LoginForm(props) {
    return (
        <LoginAreaItem>
        <div className="login-form">
            <LoginInput type="text" name="id" other={{...props.idUseInput, placeHolder: "아이디"}}></LoginInput>
            <LoginInput type="password" name="password" other={{...props.passwordUseInput, placeHolder: "비밀번호"}}></LoginInput>
            <LoginButton/>
        </div>
        </LoginAreaItem>
    )
}

function SignupPannel(props) {
    return (<LoginAreaItem>
        <div className="login-signup-pannel">
            <label>아이디가 없으신가요?</label><br></br>
            <Link to="/signup">회원가입</Link>
        </div>
    </LoginAreaItem>)
}

export default function LoginPage(props) {
    let idInput = useInput("")
    let passwordInput = useInput("")
    return (
        <ZoomedPage title="로그인/회원가입">
            <div className="login-area">
                <LoginForm idUseInput={idInput} passwordUseInput={passwordInput}/>
                <SignupPannel/>
            </div>
        </ZoomedPage>
    )
}