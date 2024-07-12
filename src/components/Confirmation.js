import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ data, clearFormData }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert('Form submitted!');
    clearFormData();
    navigate('/step1');
  };

  const handleBack = () => {
    navigate('/step2');
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {data.personalInfo.name}</p>
        <p>Email: {data.personalInfo.email}</p>
        <p>Phone: {data.personalInfo.phone}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Address Line 1: {data.addressInfo.address1}</p>
        <p>Address Line 2: {data.addressInfo.address2}</p>
        <p>City: {data.addressInfo.city}</p>
        <p>State: {data.addressInfo.state}</p>
        <p>Zip Code: {data.addressInfo.zip}</p>
      </div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Confirmation;
