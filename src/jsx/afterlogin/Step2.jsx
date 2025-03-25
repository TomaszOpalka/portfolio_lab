// components/MultiStepForm/Step2.jsx
import React from 'react';
import '../../scss/_multistepform.scss';

const Step2 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const bagOptions = [1, 2, 3, 4, 5];

  return (
    <div className="step1-container">
      <h3 className="step1-title">Krok 2/4</h3>
      <p className="step2-instruction">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
      
      <div className="step2-select-container">
        <select
          value={formData.bags}
          onChange={(e) => updateFormData('bags', parseInt(e.target.value))}
          className="step2-select-input"
        >
          {bagOptions.map(num => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'worek' : num < 5 ? 'worki' : 'worków'}
            </option>
          ))}
        </select>
      </div>
      
      <div className="step2-button-group">
        <button onClick={prevStep} className="step2-back-button">
          Wstecz
        </button>
        <button onClick={nextStep} className="step2-next-button">
          Dalej
        </button>
      </div>
    </div>
  );
};

export default Step2;