import React from "react";

function AboutUs(){
    return(
        <div className="aboutus">
            <div className="aboutus-text">
                <h1>O nas</h1>
                <img className="aboutus-decoration" src="src\assets\Decoration.svg"></img>
                <p>Nori grape silver beet broccoli kombu beet<br/>
                     greens fava bean potato quandong celery.<br/> 
                    Bunya nuts black-eyed pea prairie turnip leek<br/>
                     lentil turnip greens parsnip.</p>
                    <img className="aboutus-signature" src="src/assets/Signature.svg"></img>
            </div>
            <div className="aboutus-img">
                <img src="src/assets/People.jpg"></img>
            </div>
        </div>
    )
}

export default AboutUs;