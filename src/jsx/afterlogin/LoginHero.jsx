import React from "react";
import "../../scss/_loginhero.scss";
import "../../scss/_hero.scss";

function LoginHero() {
  return (
    <>
      <div className="home loginhero">
        <div className="hero-img">
          <img
            className="loginhero-img"
            src="src/assets/Form-Hero-Image.jpg"
          ></img>
        </div>
        <div className="hero">
          <h1 className="hero-h1">
            Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM{" "}
          </h1>
          <div className="">
            <img
              className="loginhero-decoration"
              src="src\assets\Decoration.svg"
            ></img>
          </div>
          <h2 className="h2-loginhero">Wystarczą 4 proste kroki:</h2>
          <div className="steps">
            <div className="step">
              <div className="step-text">
                <div className="step-number">1</div>
                <p>Wybierz rzeczy</p>
              </div>
            </div>
            <div className="step">
              <div className="step-text">
                <div className="step-number">2</div>
                <p>Spakuj je w worki</p>
              </div>
            </div>
            <div className="step">
              <div className="step-text">
                <div className="step-number">3</div>
                <p>Wybierz fundację</p>
              </div>
            </div>
            <div className="step">
              <div className="step-text">
                <div className="step-number">4</div>
                <p>Zamów kuriera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginHero;
