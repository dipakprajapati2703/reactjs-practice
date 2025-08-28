import React, { useState } from 'react';

/**
 * @component FormExample
 * @description Demonstrates controlled form inputs with state management.
 */
export default function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.agree) {
      newErrors.agree = 'You must agree to continue';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      agree: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="state-example">
        <h3>Form Submitted Successfully!</h3>
        <div className="submission-summary">
          <h4>Submitted Data:</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
          <p><strong>Agreed:</strong> {formData.agree ? 'Yes' : 'No'}</p>
        </div>
        <button onClick={resetForm}>Submit Another Form</button>
      </div>
    );
  }

  return (
    <div className="state-example">
      <h3>Controlled Form Example</h3>
      
      <form onSubmit={handleSubmit} className="form-example">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className={errors.message ? 'error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            I agree to the terms and conditions
          </label>
          {errors.agree && <span className="error-message">{errors.agree}</span>}
        </div>

        <div className="form-actions">
          <button type="submit">Submit Form</button>
          <button type="button" onClick={resetForm}>Reset Form</button>
        </div>
      </form>

      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Controlled inputs</strong> - State controls input values</li>
          <li><strong>Object state</strong> - Single state object for form data</li>
          <li><strong>Immutable updates</strong> - Spread operator for state updates</li>
          <li><strong>Form validation</strong> - Error state management</li>
          <li><strong>Conditional rendering</strong> - Show success/error states</li>
        </ul>
      </div>
    </div>
  );
}
