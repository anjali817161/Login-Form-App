import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressInfo = ({ data, updateData }) => {
  const [form, setForm] = useState(data);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setForm(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.address1) newErrors.address1 = 'Address Line 1 is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.state) newErrors.state = 'State is required';
    if (!form.zip) newErrors.zip = 'Zip Code is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateData(form);
      navigate('/step3');
    }
  };

  const handleBack = () => {
    updateData(form);
    navigate('/step1');
  };

  return (
    <div>
      <h2>Address Information</h2>
      <div>
        <label>Address Line 1:</label>
        <input type="text" name="address1" value={form.address1} onChange={handleChange} />
        {errors.address1 && <p>{errors.address1}</p>}
      </div>
      <div>
        <label>Address Line 2:</label>
        <input type="text" name="address2" value={form.address2} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={form.city} onChange={handleChange} />
        {errors.city && <p>{errors.city}</p>}
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={form.state} onChange={handleChange} />
        {errors.state && <p>{errors.state}</p>}
      </div>
      <div>
        <label>Zip Code:</label>
        <input type="text" name="zip" value={form.zip} onChange={handleChange} />
        {errors.zip && <p>{errors.zip}</p>}
      </div>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default AddressInfo;
