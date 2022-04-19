import React from "react";
import Aside from "../Aside/Aside";
import './Header.css';
const Header = () => {
    return (
        <header className="fixed--header__left">
            <div className="fixed--header__wrap">
                <button id="btnCloseToMenu" className="btn--menu" type="button"><span className="material-icons">menu</span></button>
                <h1 className="logo"><a href="/"><img src="https://youcandoo.yanadoocdn.com/v3/web/assets/images/web_logo_blue.svg" alt="로고" /></a></h1>
            </div>
            <button id="btnAddToItem" className="btn--add" type="button" ><span className="material-icons add-icons">add</span><span className="add-title">항목 추가 등록하기</span></button>
            <nav className="nav--list">
                <ul>
                    <li><a href="{()=>false}"><span className="material-icons">turned_in</span><span>항목1</span></a></li>
                    <li><a href="{()=>false}"><span className="material-icons">code</span><span>항목2</span></a></li>
                    <li><a href="{()=>false}"><span className="material-icons">turned_in</span><span>항목3</span></a></li>
                    <li><a href="{()=>false}"><span className="material-icons">turned_in</span><span>항목4</span></a></li>
                    <li><a href="{()=>false}"><span className="material-icons">turned_in</span><span>항목5</span></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;