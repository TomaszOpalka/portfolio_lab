import React from "react";
import Decoration from '@/assets/Decoration.svg';
import People from '@/assets/People.jpg';
import Signature from '@/assets/Signature.svg';

function AboutUs(){
    return(
        <div className="aboutus" id="aboutus">
            <div className="aboutus-text">
                <h1>O nas</h1>
                <img className="aboutus-decoration" src={Decoration}></img>
                <p>Nori grape silver beet broccoli kombu beet<br/>
                     greens fava bean potato quandong celery.<br/> 
                    Bunya nuts black-eyed pea prairie turnip leek<br/>
                     lentil turnip greens parsnip.</p>
                    <img className="aboutus-signature" src={Signature}></img>
            </div>
            <div className="aboutus-img">
                <img src={People}></img>
            </div>
        </div>
    )
}

export default AboutUs;