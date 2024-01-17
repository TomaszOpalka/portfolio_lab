import React from "react";

function Steps(){
    return(
        <div>
            <div className="steps-white">
                <h1>Wystarczą 4 proste kroki</h1>
                <img className="steps-decoration" src="src\assets\Decoration.svg"></img>
            </div>
            <div className="steps-grey">

                <div className="steps-4">
                    <img className="steps-icons" src="src/assets/Icon-1.svg"></img>
                    <h2>Wybierz rzeczy</h2>
                    <hr className="steps-hr"/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>

                <div className="steps-4">
                <img className="steps-icons" src="src/assets/Icon-2.svg"></img>
                    <h2>Spakuj je</h2>
                    <hr className="steps-hr"/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>

                <div className="steps-4">
                    <img className="steps-icons" src="src/assets/Icon-3.svg"></img>    
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <hr className="steps-hr"/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="steps-4">
                    <img className="steps-icons" src="src/assets/Icon-4.svg"></img>
                    <h2>Zamów kuriera</h2>
                    <hr className="steps-hr"/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps-white">
                <button className="steps-btn hero-btn">ODDAJ<br></br>RZECZY</button>
            </div>
        </div>
    )
}
export default Steps;