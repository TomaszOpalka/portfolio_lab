// components/MultiStepForm/Summary.jsx
import React from 'react';
import '../../scss/_multistepform.scss';
import Icon1 from '../../assets/Icon-1.svg';
import Icon4 from "../../assets/Icon-4.svg";

const Summary = ({ formData, prevStep, onSubmit }) => {
  return (
    <div className="summary-container">
      <h3 className="summary-title">Podsumowanie Twojej darowizny</h3>
      
      <div className="summary-section">
        <h4 className="summary-section-title">
          <img src={Icon1} alt="Ikona" className="summary-icon" /> 
          Oddajesz:
        </h4>
        
        <div className="summary-content">
          <p className="summary-text">Liczba worków: {formData.bags}</p>
          <ul className="summary-list">
            {formData.categories.map((item, index) => (
              <li key={index} className="summary-list-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="summary-section">
        <h4 className="summary-section-title">
          <img src={Icon4} alt="Ikona" className="summary-icon" /> 
          Dla organizacji:
        </h4>
        <p className="summary-text">{formData.organization || formData.location}</p>
      </div>
      
      <div className='summary-flex'>
        <div className="summary-section">
          <h4 className="summary-section-title">Adres odbioru:</h4>
          <p className="summary-text">Ulica: {formData.address.street}</p>
          <p className="summary-text">Miasto: {formData.address.city}</p>
          <p className="summary-text">Kod pocztowy: {formData.address.postCode}</p>
          <p className="summary-text">Telefon: {formData.address.phone}</p>
        </div>
        
        <div className="summary-section">
          <h4 className="summary-section-title">Termin odbioru:</h4>
          <p className="summary-text">Data: {formData.pickupDate}</p>
          <p className="summary-text">Godzina: {formData.pickupTime}</p>
          {formData.notes && <p className="summary-text">Uwagi: {formData.notes}</p>}
        </div>
      </div>
      
      <div className="summary-button-group">
        <button onClick={prevStep} className="summary-back-button">
          Wstecz
        </button>
        <button onClick={onSubmit} className="summary-submit-button">
          Potwierdzam
        </button>
      </div>
    </div>
  );
};
export default Summary;