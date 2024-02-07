import React from "react";

function Contact(){
    return(
        <div className="contact-container" id='contact'>
            <div className="contact-img">
                <img className='contact-background' src="src/assets/Background-Contact-Form.jpg"></img>
            </div>
            <div className="contact-form">
                <h1>Skontaktuj się z nami</h1>
                <img className='contact-decoration' src="src/assets/Decoration.svg"></img>

                    <form className="contact-form-form">
                        <div className="form-position">
                            <label className="form-name">
                                <h4>Wpisz swoje imię</h4>
                                <input placeholder="Krzysztof"></input>
                            </label>
                            <label className="form-mail">
                                <h4>Wpisz swój email</h4>
                                <input placeholder="abc@xyz.pl"></input>
                            </label>
                        </div>
                        <label className="form-textarea">
                        <h4>Wpisz swoją wiadomość</h4>
                        <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit.Blanditiis qui quam nulla a, sed rerum similique voluptates voluptatum!Sapiente, mollitia natus! Nulla hic distinctio vitae!"></textarea>
                         </label>
                                <div className="contact-btn">
                                <br/> <button type="submit" className="btn-send">Wyślij</button>
                                </div>
                    </form>
            </div>

            <div className="copyright-media">
                    <p>Copyright by Coders Lab</p>
                    <img src='src/assets/Facebook.svg'></img>
                    <img src="src/assets/Instagram.svg"></img>
            </div>
        </div>
    )
}

export default Contact;