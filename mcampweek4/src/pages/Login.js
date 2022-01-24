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
            <h1 className="pageTitle">냉장고를 부탁해</h1>
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
                    <Link to='../Join' style={{textDecoration: 'none', display: 'flex', justifyContent: 'center'}}>
                        <button className="button join">회원가입</button>
                    </Link>
                    <button className="button" onClick={login}>로그인</button>
                </div>
                
            </div>
            
            
        </div>
    )
}