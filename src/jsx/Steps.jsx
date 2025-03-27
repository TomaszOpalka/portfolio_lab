import React from "react";
import { Link } from "react-router-dom";
import Decoration from '@/assets/Decoration.svg';
import Icon1 from '@/assets/Icon-1.svg';
import Icon2 from '@/assets/Icon-2.svg';
import Icon3 from '@/assets/Icon-3.svg';
import Icon4 from '@/assets/Icon-4.svg';

function Steps(){
    return(
        <div>
            <div className="steps-white" id="steps">
                <h1>Wystarczą 4 proste kroki</h1>
                <img className="steps-decoration" src={Decoration}></img>
            </div>
            <div className="steps-grey">

                <div className="steps-4">
                    <img className="steps-icons" src={Icon1}></img>
                    <h2>Wybierz rzeczy</h2>
                    <hr className="steps-hr"/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>

                <div className="steps-4">
                <img className="steps-icons" src={Icon2}></img>
                    <h2>Spakuj je</h2>
                    <hr className="steps-hr"/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>

                <div className="steps-4">
                    <img className="steps-icons" src={Icon3}></img>    
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <hr className="steps-hr"/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="steps-4">
                    <img className="steps-icons" src={Icon4}></img>
                    <h2>Zamów kuriera</h2>
                    <hr className="steps-hr"/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps-white">
            <Link to="/login"><button className="steps-btn hero-btn">ODDAJ<br></br>RZECZY</button></Link>
            </div>
        </div>
    )
}
export default Steps;