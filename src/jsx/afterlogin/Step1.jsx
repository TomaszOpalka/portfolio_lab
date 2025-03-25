import React from 'react';
import '../../scss/_multiStepForm.scss';

const Step1 = ({ formData, updateFormData, nextStep }) => {
  const categories = [
    'ubrania, które nadają się do ponownego użycia',
    'ubrania do wyrzucenia',
    'zabawki',
    'książki',
    'inne'
  ];

  const handleCheckboxChange = (category) => {
    updateFormData('categories', 
      formData.categories.includes(category)
        ? formData.categories.filter(item => item !== category)
        : [...formData.categories, category]
    );
  };

  return (
    <div className="step1-container">
      <h3 className="step1-title">Krok 1/4</h3>
      <p className="step1-instruction">Zaznacz co chcesz oddać:</p>
      
      <div className="step1-checkbox-group">
        {categories.map(category => (
          <label key={category} className="step1-checkbox-label">
            <input
              type="checkbox"
              className="step1-checkbox-input"
              checked={formData.categories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
            <span className="step1-checkbox-custom"></span>
            <span className="step1-checkbox-text">{category}</span>
          </label>
        ))}
      </div>
      
      <button 
        onClick={nextStep}
        disabled={formData.categories.length === 0}
        className="step1-next-button"
      >
        Dalej
      </button>
    </div>
  );
};

export default Step1;