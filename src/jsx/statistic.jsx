import React from "react";

function Statistic(){
    return(
        <>
        <div className="statistic-container">
            <div className="statistic-column">
                <h1 className="statistic-number">10</h1>
                <h2>ODDANYCH WORKÓW</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet et voluptatem quis dolores harum a.</p>
             </div>  
              <div className="statistic-column">
                <h1 className="statistic-number">5</h1>
                <h2>WSPARTYCH ORGANIZACJI</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas aperiam quo doloribus ad fugiat?</p>
            </div>
            <div className="statistic-column">
                <h1 className="statistic-number">7</h1>
                <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aperiam quas molestias sit tempora laborum?</p>
            </div>
        </div>
        </>
    )
}

export default Statistic;