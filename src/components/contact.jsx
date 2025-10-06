import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    if (name === 'name' && value.trim() === '') {
      error = 'Name is required';
    }

    if (name === 'email') {
      if (value.trim() === '') {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Enter a valid email';
      }
    }

    if (name === 'message' && value.trim() === '') {
      error = 'Message is required';
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.message.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      Object.values(errors).every((err) => err === '')
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const existingData = JSON.parse(localStorage.getItem('contactData')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('contactData', JSON.stringify(updatedData));

    alert('Saved to localStorage!');
    setFormData({ name: '', email: '', message: '' });
    setErrors({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-section" id="Contact">
      <h2>CONTACT</h2>

    <div className="contact-container">
    <div className="contact-info-card">
      <h3>Praveen Kumar S</h3>
      <p>Email: praveenkumar10072003@gmail.com</p>
      <p>Phone: +91-6379033685</p>
      <p>Location: Chennai, India</p>
      <p>Available for freelance & full-time work.</p>
    </div>

      <div className="contact-form-card">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>    
        {/* Name Field */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <span className="input-error">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <span className="input-error">{errors.email}</span>}
        </div>

        {/* Message Field */}
        <div className="input-group">
          <textarea
            name="message"
            placeholder="Describe about the website"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          ></textarea>
          {errors.message && <span className="input-error">{errors.message}</span>}
        </div>

        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;
