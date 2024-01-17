import React from "react";

function Header(){

    return(
       <>
        <div className="header">
            <div className="header-topgroup">
                <button className="btn-header login">Zaloguj</button>
                <button className="btn-header register">Załóż konto</button>
            </div>
            <div className="header-nav">
            <ul className="header-ul">
                <li>Start </li>
                <li>O co chodzi?</li>
                <li>O nas </li>
                <li>Fundacja i organizacje </li>
                <li>Kontakt </li>
            </ul>
            </div>
        </div>
       </>
    )
}

export default Header;