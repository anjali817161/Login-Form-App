import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = ({ data, updateData }) => {
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
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.phone) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateData(form);
      navigate('/step2');
    }
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfo;
