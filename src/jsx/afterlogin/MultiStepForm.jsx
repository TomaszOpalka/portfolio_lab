// components/MultiStepForm/MultiStepForm.jsx
import React, { useState } from "react";
import FormHeader from "./FormHeader";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
import "../../scss/_multistepform.scss";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    categories: [],
    bags: 1,
    location: "",
    organization: "",
    address: {
      street: "",
      city: "",
      postCode: "",
      phone: "",
    },
    pickupDate: "",
    pickupTime: "",
    notes: "",
  });

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      console.log("Formularz wysłany:", formData);

      // miejsce na połączenie supabase
      // const { error } = await supabase.from('donations').insert([formData]);
      // if (error) throw error;

      nextStep(); // Przechodzi do ThankYou (krok 6)
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
      //obsługa błędów
    }
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateAddress = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  return (
    <>
      {currentStep <= 5 && <FormHeader currentStep={currentStep} />}
      <div className="multi-step-form">
        <div className="form-content">
          {currentStep === 1 && (
            <Step1
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
            />
          )}

          {currentStep === 2 && (
            <Step2
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {currentStep === 3 && (
            <Step3
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {currentStep === 4 && (
            <Step4
              formData={formData}
              updateFormData={updateFormData}
              updateAddress={updateAddress}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {currentStep === 5 && (
            <Summary
              formData={formData}
              prevStep={prevStep}
              onSubmit={handleSubmit}
            />
          )}

          {currentStep === 6 && <ThankYou />}
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
