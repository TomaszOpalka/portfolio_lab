import { Link } from 'react-router-dom';
import HomeHeroImage from '../assets/Home-Hero-Image.jpg';
import Decoration from '../assets/Decoration.svg';



function Hero(){

    return(
       <>
        <div className="home" id="hero"> 
            <div className="hero-img">
                <img className="home-img" src='src/assets/Home-Hero-Image.jpg' ></img>
            </div>
            <div className="hero">
                <div className="hero-h1">
                    <h1> Zacznij pomagać! </h1>
                    <h1> Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
                    <img className="hero-decoration" src="src\assets\Decoration.svg"></img>
                <div className="hero-btns">
                <Link to="/login"><button className="hero-btn">ODDAJ<br></br>RZECZY</button></Link>
                <Link to="/login"><button className="hero-btn">ZORGANIZUJ ZBIÓRKĘ</button></Link>
                </div>
            </div>
        </div>
       </>
    )
}

export default Hero;