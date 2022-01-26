import React, {useEffect, useState} from 'react';
import IngredientList from '../component/IngredientList';
import LevelList from '../component/LevelList';
import SelectedIngredientList from '../component/SelectedIngredientList';
import './Home.css';
import {Link, useNavigate} from 'react-router-dom';
import PageHeader from '../component/PageHeader';
import CookingTimeList from '../component/CookingTimeList';
import {fetchAllFridgeIngredient} from '../libs/newapi';

export default function Home({tabBarList, setTabBarList}) {
    const [list, setList] = useState([]);
//     useState([{id: 1, name: "양파", imgSrc: "data:image/jpeg;base64,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"},
//     {id: 2, name: "계란", imgSrc: "https://src.hidoc.co.kr/image/lib/2021/3/19/1616132123214_0.jpg"},
//     {id: 3, name: "마늘", imgSrc: "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMTlfMjA2/MDAxNDg5OTA1NjU5MTI3.XgpVLwuZ0mztn8ygvf9xkFiFsS-ekKscARLKQ5cAoPgg.8N6q4J-hD-Fv48uRlw8e7ZSrzpq9Mv3miryo8VWX2CEg.JPEG.wun12342005/%EB%A7%88%EB%8A%98%EC%9D%80_%EC%98%A8%EA%B0%96_%EB%82%98%EC%81%9C_%EA%B8%B0%EC%9A%B4%EC%9C%BC%EB%A1%9C%EB%B6%80%ED%84%B0_%EB%AA%B8%EC%9D%84_%EB%B3%B4%ED%98%B8%ED%95%9C%EB%8B%A4..jpg?type=w2"},
// ]);
    const [selectedList, setSelectedList] = useState([]);
    const [level, setLevel] = useState([]);
    const [time, setTime] = useState('')
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=> {
        const init = async() => {
            
            const userId = window.localStorage.getItem("userId");
            const token = window.localStorage.getItem("token")
            
            if(token) {
                const res = await fetchAllFridgeIngredient(userId, token);
                const myIngredientIds = res.myIngredient;
                // console.log(myIngredientIds)
                setList(myIngredientIds);
                console.log('loggedin')
            }
            else {
                console.log('not logged in')
                navigate('/Login');
            }
        
        }
        init();
    }, []);
    console.log('List: ')
    console.log(list);
    useEffect(() => {
        var ingredientIds = '';
        selectedList.map((item) => {
            if(ingredientIds === '') ingredientIds += item.id;
            else ingredientIds += ',' + item.id;
        });
        setQuery('/Search?ingredients='+ingredientIds + '&level=' + level + '&time=' + time);
    }, [selectedList, level, time])
    
    const tab = [
        <div className="selectedIngredientList">
            <h2 className="articleTitle">선택한 재료</h2>
            <SelectedIngredientList selectedList={selectedList} setSelectedList={setSelectedList}/>
        </div>,
        <div className="selectedIngredientList">
            <h2 className="articleTitle">조리 난이도</h2>
            <LevelList level={level} setLevel={setLevel}/>
        </div>,
        <div className="selectedIngredientList">
            <h2 className="articleTitle">조리 시간</h2>
            <CookingTimeList time={time} setTime={setTime}/>
        </div>
    ];
    const [step, setStep] = useState(0);
    //다음 과정으로 이동
    const nextButton = () => {
        if(step + 1 < tab.length)
        setStep(step + 1);
    };
    //이전 과정으로 이동
    const prevButton = () => {
        if(step - 1 >= 0)
        setStep(step - 1);
    };
    //step에 따라 다른 종류의 버튼들을 활성화
    const buttonActivate = () => {
        if(selectedList.length === 0) return null;
        else {
            if(step === 0) return buttonCase[0]
            else {
                if(step === 1) {
                    if(level.length === 0) return  buttonCase[2];
                    else return buttonCase[1];
                }
                if(step === tab.length - 1) {
                    if(time === '') return  buttonCase[2];
                    else return buttonCase[3];
                }
            }
        }
    }
    //사용하는 버튼들의 배열
    const buttonList = {
        next: <button className="button next" onClick={nextButton}>다음</button>,
        prev: <button className="button prev" onClick={prevButton}>이전</button>,
        complete: <Link to={query} style={{textDecoration: 'none'}}>
                    <button className="button complete">완료</button>
                </Link>
    }
    //상황들에 따른 버튼들의 조합
    const buttonCase = [
        <div className="buttonHolder">
            {buttonList.next}
        </div>
        , //처음 step
        <div className="buttonHolder">
            {buttonList.prev}
            {buttonList.next}
        </div>, //처음과 마지막 사이에 있는 step
        <div className="buttonHolder">
            {buttonList.prev}
        </div>,
        <div className="buttonHolder">
            {buttonList.prev}
            {buttonList.complete}
        </div> //마지막 step 완료
        
    ]
    return (
        <div className="homePageWrapper">
            <header className="PageHeader">
                <PageHeader tabBarList={tabBarList} setTabBarList={setTabBarList}/>

                {/* <h1 className="homeTitle">냉장고를 부탁해</h1>
                <div className="tabBar">
                    <Link to="/Login">
                        <button className="loginButton">로그인</button>
                    </Link>
                    
                </div> */}
            </header>
            <main>
                <div className="myIngredientList">
                    <h2 className="articleTitle">냉장고 재료</h2>
                    <IngredientList list={list} setList={setList} selectedList={selectedList} setSelectedList={setSelectedList}/>
                </div>
                <div className="filter">
                    {tab[step]}
                    <div className="buttonHolder">
                        {buttonActivate()}
                    </div>
                </div>
            </main>
            
        </div>
    )
}
