import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import StepNavigation from './components/StepNavigation';
import { FormContainer } from './components/FormContainer';

const initialFormData = {
  personalInfo: { name: '', email: '', phone: '' },
  addressInfo: { address1: '', address2: '', city: '', state: '', zip: '' },
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const updateFormData = (section, data) => {
    setFormData(prevState => {
      const updatedState = { ...prevState, [section]: data };
      localStorage.setItem('formData', JSON.stringify(updatedState));
      return updatedState;
    });
  };

  const clearFormData = () => {
    setFormData(initialFormData);
    localStorage.removeItem('formData');
  };

  return (
    <FormContainer>
      <StepNavigation />
      <Routes>
        <Route
          path="/step1"
          element={
            <PersonalInfo
              data={formData.personalInfo}
              updateData={data => updateFormData('personalInfo', data)}
            />
          }
        />
        <Route
          path="/step2"
          element={
            <AddressInfo
              data={formData.addressInfo}
              updateData={data => updateFormData('addressInfo', data)}
            />
          }
        />
        <Route
          path="/step3"
          element={<Confirmation data={formData} clearFormData={clearFormData} />}
        />
      </Routes>
    </FormContainer>
  );
};

export default App;
