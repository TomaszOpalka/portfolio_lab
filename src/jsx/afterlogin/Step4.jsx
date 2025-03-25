// components/MultiStepForm/Step4.jsx
import React from 'react';
import '../../scss/_multiStepForm.scss';

const Step4 = ({ 
  formData, 
  updateFormData, 
  updateAddress, 
  nextStep, 
  prevStep 
}) => {
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    updateAddress(name, value);
  };

  const handlePickupChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  return (
    <div className="step1-container">
      <h3 className="step1-title">Krok 4/4</h3>
      <p className="step1-instruction">Podaj adres oraz termin odbioru rzeczy:</p>
      
      <div className="step4-form-grid">
        <div className="step4-form-group">
          <label className="step4-label">Ulica</label>
          <input
            type="text"
            name="street"
            className="step4-input"
            value={formData.address.street}
            onChange={handleAddressChange}
            required
          />
        </div>
        
        <div className="step4-form-group">
          <label className="step4-label">Miasto</label>
          <input
            type="text"
            name="city"
            className="step4-input"
            value={formData.address.city}
            onChange={handleAddressChange}
            required
          />
        </div>
        
        <div className="step4-form-group">
          <label className="step4-label">Kod pocztowy</label>
          <input
            type="text"
            name="postCode"
            className="step4-input"
            value={formData.address.postCode}
            onChange={handleAddressChange}
            pattern="[0-9]{2}-[0-9]{3}"
            placeholder="00-000"
            required
          />
        </div>
        
        <div className="step4-form-group">
          <label className="step4-label">Numer telefonu</label>
          <input
            type="tel"
            name="phone"
            className="step4-input"
            value={formData.address.phone}
            onChange={handleAddressChange}
            pattern="[0-9]{9}"
            placeholder="123456789"
            required
          />
        </div>
        
        <div className="step4-form-group">
          <label className="step4-label">Data odbioru</label>
          <input
            type="date"
            name="pickupDate"
            className="step4-input"
            value={formData.pickupDate}
            onChange={handlePickupChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
        
        <div className="step4-form-group">
          <label className="step4-label">Godzina odbioru</label>
          <input
            type="time"
            name="pickupTime"
            className="step4-input"
            value={formData.pickupTime}
            onChange={handlePickupChange}
            required
          />
        </div>
        
        <div className="step4-form-group step4-form-group--full-width">
          <label className="step4-label">Uwagi dla kuriera</label>
          <textarea
            name="notes"
            className="step4-textarea"
            value={formData.notes}
            onChange={(e) => updateFormData('notes', e.target.value)}
            rows="3"
          />
        </div>
      </div>
      
      <div className="step4-button-group">
        <button onClick={prevStep} className="step4-back-button">
          Wstecz
        </button>
        <button 
          onClick={nextStep} 
          className="step4-next-button"
          disabled={
            !formData.address.street || 
            !formData.address.city || 
            !formData.address.postCode || 
            !formData.address.phone || 
            !formData.pickupDate || 
            !formData.pickupTime
          }
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default Step4;