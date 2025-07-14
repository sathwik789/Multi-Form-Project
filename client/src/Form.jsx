import React, { useState } from 'react';
import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';
import Summary from './components/Summary';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: {},
    contact: {},
    education: {},
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const progress = (step / 4) * 100;

  switch (step) {
    case 1:
      return <Screen1 next={nextStep} formData={formData} setFormData={setFormData} progress={progress} />;
    case 2:
      return <Screen2 next={nextStep} back={prevStep} formData={formData} setFormData={setFormData} progress={progress} />;
    case 3:
      return <Screen3 next={nextStep} back={prevStep} formData={formData} setFormData={setFormData} progress={progress} />;
    case 4:
      return <Summary back={prevStep} formData={formData} />;
    default:
      return <h2>Multi-Step Form</h2>;
  }
};

export default Form;
