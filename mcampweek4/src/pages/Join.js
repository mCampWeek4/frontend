import React, {useState} from 'react';
import './Join.css';
import {Link} from 'react-router-dom';

export default function Join() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdChk, setPwdChk] = useState('');
    const [link, setLink] = useState('');
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePwd = (e) => {
        setPwd(e.target.value);
        if(e.target.value === pwdChk) setLink('../Login');
        else setLink('');
    }
    const onChangePwdChk = (e) => {
        setPwdChk(e.target.value);
        if(pwd === e.target.value) setLink('../Login');
        else setLink('');
    }
    const join = () => {
        if(pwd !== pwdChk) {
            setPwd('');
            setPwdChk('');
            console.log('chk password again');
        }
        else {
            console.log('join success!');
        }
        console.log('id: ' + id + ' password: ' + pwd);

    };
    return (
        <div>
            <h1>회원가입 화면</h1>
            <div className="join">
                <div className="joinInputWrapper">
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
                    <input
                    placeholder="비밀번호확인"
                    onChange={onChangePwdChk}
                    value={pwdChk}
                    className="input"
                    type="password"
                    />
                </div>
                <Link to={link}>
                    <button className="joinButton" onClick={join}>화원가입</button>
                </Link>
                
            </div>
            
            
        </div>
    )

}