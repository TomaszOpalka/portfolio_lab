import React from "react";

// WhoWeHelp = wwh
function WhoWeHelp(){

    return(
        <div className="wwh-container">
           <div className="wwh-text">
                <h1>Komu pomagamy?</h1>
                <img className="wwh-decoration" src="src\assets\Decoration.svg"></img>
                <div className="wwh-btns">
                    <button className="btn wwh-btn">Fundacjom</button>
                    <button className="btn wwh-btn">Organizacjom<br/> pozarządowym</button>
                    <button className="btn wwh-btn">Lokalnym<br/> zbiórkom</button>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br/>
                którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/>
                 komu pomagają i czego potrzebują.</p>
           </div>

           <div className="wwh-list">
                <ul className="wwh-ul">
                    <li className="wwh-li">
                        <h1> Fundacja “Dbam o Zdrowie”</h1>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        <p className="wwh-li-right">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        <hr className="wwh-hr"/>
                    </li>
                    
                    <li className="wwh-li">
                        <h1> Fundacja “Dla dzieci”</h1>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                        <p className="wwh-li-right">ubrania, meble, zabawki</p>
                        <hr className="wwh-hr"/>
                    </li>

                    <li className="wwh-li">
                        <h1> Fundacja “Bez domu”</h1>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                        <p className="wwh-li-right">ubrania, jedzenie, ciepłe koce</p>
                        <hr className="wwh-hr"/>
                    </li>
                </ul>
           </div>
        </div>
    )
}
export default WhoWeHelp;