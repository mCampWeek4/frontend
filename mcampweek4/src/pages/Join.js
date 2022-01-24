import React, {useState} from 'react';
import './Join.css';
import {Link} from 'react-router-dom';
import {createUser} from '../libs/newapi';


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
    const join = async() => {
        if(pwd !== pwdChk) {
            setPwd('');
            setPwdChk('');
            console.log('chk password again');
        }
        else {
            await createUser(id, pwd);
            console.log('join success!');
        }
        console.log('id: ' + id + ' password: ' + pwd);

    };
    return (
        <div className="joinPageWrapper">
            <div className="borderLine">
                <div className="join">
                    <p className="joinText">회원가입</p>
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
                    <div className="joinButtonWrapper">
                        <Link to={link} style={{textDecoration: 'none'}}>
                            <button className="joinButtonJoinPage" onClick={join}>화원가입</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}