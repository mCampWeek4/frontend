import React, {useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

export default function Login() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }
    const login = () => {
        console.log('id: ' + id + ' password: ' + pwd);
    };
    return (
        <div className="loginPageWrapper">
            <div className="borderLine">
                <div className="loginLogo">
                    <p className="loginLogoLargeText">냉장고</p>
                    <p className="loginLogoSmallText">를</p>
                    <p className="loginLogoLargeText">부탁해</p>
                </div>
                <div className="login">
                    <div className="loginInputWrapper">
                        <input
                        placeholder="아이디"
                        onChange={onChangeId}
                        value={id}
                        className="input"
                        />
                        <input
                        placeholder="비밀번호"
                        onChange={onChangePwd}
                        value={pwd}
                        className="input"
                        type="password"
                        />
                    </div>
                    <div className="loginButtonWrapper">
                        <Link to='../Join' style={{textDecoration: 'none'}}>
                            <button className="joinButton">회원가입</button>
                        </Link>
                        <button className="loginButton" onClick={login}>로그인</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}