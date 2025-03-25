import React, { useState } from 'react';
import '../../scss/_multiStepForm.scss';

const cities = [
  'Warszawa', 'Kraków', 'Wrocław', 'Poznań', 'Gdańsk', 
  'Łódź', 'Katowice', 'Lublin', 'Białystok', 'Szczecin'
];

const helpGroups = [
  'dzieciom',
  'samotnym matkom',
  'bezdomnym',
  'niepełnosprawnym',
  'osobom starszym'
];

const Step3 = ({ formData, updateFormData, nextStep, prevStep }) => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCitySelect = (city) => {
    updateFormData('city', city);
    setIsCityDropdownOpen(false);
    setSearchTerm('');
  };

  const handleOrganizationChange = (e) => {
    updateFormData('organization', e.target.value);
  };

  const handleLocationSelect = (location) => {
    updateFormData('location', location);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="step1-container">
      <h3 className="step1-title">Krok 3/4</h3>
      
      {/* Sekcja wyboru miasta - dropdown */}
      <div className="step3-section">
        <p className="step1-instruction">Wybierz miasto:</p>
        <div className="step3-dropdown">
          <button 
            className="step3-dropdown-toggle"
            onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
          >
            {formData.city || 'Wybierz miasto...'}
            <span className={`step3-dropdown-arrow ${isCityDropdownOpen ? 'open' : ''}`}>
              ▼
            </span>
          </button>
          
          {isCityDropdownOpen && (
            <div className="step3-dropdown-menu">
              <div className="step3-dropdown-search">
                <input
                  type="text"
                  placeholder="Wyszukaj miasto..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="step3-dropdown-input"
                />
              </div>
              <div className="step3-dropdown-items">
                {filteredCities.map(city => (
                  <div
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className={`step3-dropdown-item ${
                      formData.city === city ? 'selected' : ''
                    }`}
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Sekcja wyboru grupy docelowej */}
      <div className="step3-section">
        <p className="step1-instruction">Komu chcesz pomóc?</p>
        <div className="step3-button-group-horizontal">
          {helpGroups.map(group => (
            <button
              key={group}
              onClick={() => handleLocationSelect(group)}
              className={`step3-location-button ${
                formData.location === group ? 'step3-location-button--active' : ''
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </div>
      
      {/* Pole tekstowe dla organizacji */}
      <div className="step3-section">
        <p className="step1-instruction">Wpisz nazwę organizacji (opcjonalnie):</p>
        <input
          type="text"
          value={formData.organization || ''}
          onChange={handleOrganizationChange}
          placeholder="Nazwa organizacji..."
          className="step3-text-input"
        />
      </div>
      
      <div className="step3-navigation-buttons">
        <button onClick={prevStep} className="step3-back-button">
          Wstecz
        </button>
        <button 
          onClick={nextStep} 
          className="step3-next-button"
          disabled={!formData.city || !formData.location}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default Step3;