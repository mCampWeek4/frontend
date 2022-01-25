import React, {useState} from 'react';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {fetchToken} from '../libs/newapi';


export default function Login() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePwd = (e) => {
        setPwd(e.target.value);
    }
    const navigate = useNavigate();
    const login = async() => {
        console.log('id: ' + id + ' password: ' + pwd);
        const token = await fetchToken(id, pwd);
        if(token.token) {
            window.localStorage.setItem("token", token.token);
            window.localStorage.setItem("userId", token.id);
            window.localStorage.setItem("userName", token.name);
            // console.log(token.id)
            navigate('/');
        }
        else {
            setId('');
            setPwd('');
        }

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