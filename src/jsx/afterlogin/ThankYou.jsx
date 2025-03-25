// components/MultiStepForm/ThankYou.jsx
import React from 'react';
import '../../scss/_multistepform.scss';
import '../../assets/Decoration.svg';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <h2 className="thank-you-title">Dziękujemy za przesłanie formularza</h2>
      <p className="thank-you-message">Na maila prześlemy wszelkie informacje o odbiorze.</p>
      <img className="thank-you-decoration" src="src\assets\Decoration.svg"></img>
      <div className="thank-you-icon">✓</div>
    </div>
  );
};

export default ThankYou;