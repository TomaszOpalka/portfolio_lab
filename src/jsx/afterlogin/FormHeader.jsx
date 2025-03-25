import React from 'react';
import '../../scss/_formHeader.scss';

const FormHeader = ({ currentStep }) => {
  const headerContent = {
    1: {
      title: "Ważne!",
      description: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać."
    },
    2: {
      title: "Ważne!",
      description: "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz Tutaj."
    },
    3: {
      title: "Ważne!",
      description: "Jeśli wiesz komu chcesz pomóc możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizację po ich lokalizacji bądź celu ich pomocy."
    },
    4: {
      title: "Ważne!",
      description: "Podaj adres oraz termin odbioru rzeczy."
    }
  };

  const currentContent = headerContent[currentStep] || headerContent[1];

  return (
    <div className="form-header">
      <h2 className="form-header__title">{currentContent.title}</h2>
      <p className="form-header__description">
        {currentContent.description}
      </p>
    </div>
  );
};

export default FormHeader;