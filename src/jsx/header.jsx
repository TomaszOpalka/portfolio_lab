import React from "react";
import { Link } from 'react-router-dom';
import { Link as  ScrollLink} from 'react-scroll'

function Header(){

    return(
       <>
        <div className="header">
            <div className="header-topgroup">
                <Link to="/login"><button className="btn-header login">Zaloguj</button></Link>
                <Link to="/createAcc"><button className="btn-header register">Załóż konto</button></Link>
            </div>
            <div className="header-nav">
            <ul className="header-ul">
                <Link to="/"><li className="header-li">Start</li></Link>
                <ScrollLink className="header-li" to="steps">O co chodzi?</ScrollLink>
                <ScrollLink className="header-li" to="aboutus"> O nas </ScrollLink>
                <ScrollLink className="header-li" to="whowehelp"> Fundacja i organizacje </ScrollLink>
                <ScrollLink className="header-li" to='contact'> Kontakt </ScrollLink>
            </ul>
            </div>
        </div>
       </>
    )
}

export default Header;