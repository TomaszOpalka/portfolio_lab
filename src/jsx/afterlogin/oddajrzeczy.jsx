import React from 'react';
import Header from '../Header.jsx';
import Contact from '../Contact.jsx';
import LoginHero from '../afterlogin/LoginHero.jsx';


function OddajRzeczy() {
  return (
    <div className="oddaj-rzeczy">
        <div className="oddaj-rzeczy-hero"></div>
        <Header/>
        <LoginHero/>
      
        <Contact/>
    </div>
  );
}

export default OddajRzeczy;