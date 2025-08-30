/**
 * @component FormExample
 * @description Demonstrates controlled form inputs with state management.
 */
import { useState } from "react";
import "../../examples/modern-forms.css";

export default function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.agree) {
      newErrors.agree = "You must agree to the terms";
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
      name: "",
      email: "",
      message: "",
      agree: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="modern-form">
        <div className="form-header">
          <h3>🎉 Form Submitted Successfully!</h3>
          <p>Thank you for your submission. Here's what you sent:</p>
        </div>
        
        <div style={{ background: 'rgba(39, 174, 96, 0.1)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Message:</strong> {formData.message}</p>
          <p><strong>Agreed:</strong> {formData.agree ? 'Yes' : 'No'}</p>
        </div>
        
        <div className="form-actions">
          <button onClick={resetForm} className="modern-button primary">
            📝 Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-form">
      <div className="form-header">
        <h3>📝 Controlled Form Example</h3>
        <p>Experience modern form styling with real-time validation and beautiful animations.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={`form-group ${errors.name ? 'invalid' : formData.name ? 'valid' : ''}`}>
          <label htmlFor="name" className="required">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="modern-input"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <div className="form-error">
              ❌ {errors.name}
            </div>
          )}
        </div>

        <div className={`form-group ${errors.email ? 'invalid' : formData.email ? 'valid' : ''}`}>
          <label htmlFor="email" className="required">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className="modern-input"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <div className="form-error">
              ❌ {errors.email}
            </div>
          )}
        </div>

        <div className={`form-group ${errors.message ? 'invalid' : formData.message ? 'valid' : ''}`}>
          <label htmlFor="message" className="required">Message</label>
          <textarea
            id="message"
            name="message"
            className="modern-textarea"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us what's on your mind..."
          />
          {errors.message && (
            <div className="form-error">
              ❌ {errors.message}
            </div>
          )}
        </div>

        <div className={`form-group ${errors.agree ? 'invalid' : formData.agree ? 'valid' : ''}`}>
          <div className="modern-checkbox-group">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              className="modern-checkbox"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            <label htmlFor="agree" className="required">
              I agree to the terms and conditions
            </label>
          </div>
          {errors.agree && (
            <div className="form-error">
              ❌ {errors.agree}
            </div>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="modern-button primary">
            🚀 Submit Form
          </button>
          <button type="button" onClick={resetForm} className="modern-button secondary">
            🔄 Reset Form
          </button>
        </div>
      </form>
    </div>
  );
}
