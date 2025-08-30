/**
 * @component FormExample
 * @description Demonstrates controlled form inputs with useState.
 */
import { useState } from "react";

export default function FormExample() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    interests: [],
    bio: "",
    newsletter: false
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
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.age && (formData.age < 13 || formData.age > 120)) {
      newErrors.age = "Age must be between 13 and 120";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      gender: "",
      interests: [],
      bio: "",
      newsletter: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="state-example">
      <div className="modern-form">
        <div className="form-header">
          <h3>📝 Form State Management</h3>
          <p>Managing complex form state with multiple input types and validation</p>
        </div>

        {isSubmitted && (
          <div className="success-message">
            <h4>✅ Form Submitted Successfully!</h4>
            <p>Check the console to see the form data.</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="required">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`modern-input ${errors.firstName ? 'invalid' : ''}`}
              placeholder="Enter your first name"
            />
            {errors.firstName && <div className="form-error">⚠️ {errors.firstName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="required">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`modern-input ${errors.lastName ? 'invalid' : ''}`}
              placeholder="Enter your last name"
            />
            {errors.lastName && <div className="form-error">⚠️ {errors.lastName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="required">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`modern-input ${errors.email ? 'invalid' : ''}`}
              placeholder="Enter your email"
            />
            {errors.email && <div className="form-error">⚠️ {errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className={`modern-input ${errors.age ? 'invalid' : ''}`}
              placeholder="Enter your age"
              min="13"
              max="120"
            />
            {errors.age && <div className="form-error">⚠️ {errors.age}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="modern-select"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div className="form-group">
            <label>Interests</label>
            <div className="checkboxes-row">
              {["Technology", "Sports", "Music", "Reading", "Travel", "Cooking"].map(interest => (
                <div key={interest} className="checkbox-container">
                  <input
                    type="checkbox"
                    id={`interest-${interest.toLowerCase()}`}
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                    className="modern-checkbox"
                  />
                  <label htmlFor={`interest-${interest.toLowerCase()}`}>
                    {interest}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="modern-textarea"
              placeholder="Tell us about yourself..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="modern-checkbox"
              />
              <label htmlFor="newsletter">
                Subscribe to our newsletter
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="modern-button primary">
              Submit Form
            </button>
            <button type="button" onClick={resetForm} className="modern-button secondary">
              Reset Form
            </button>
          </div>
        </form>
      </div>

      {/* Code Explanation */}
      <div className="code-explanation">
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Object State:</strong> Managing multiple form fields in a single state object</li>
          <li><strong>Controlled Inputs:</strong> Form inputs whose values are controlled by React state</li>
          <li><strong>Form Validation:</strong> Client-side validation with error state management</li>
          <li><strong>Complex State Updates:</strong> Handling different input types (text, checkbox, select)</li>
          <li><strong>Event Handling:</strong> Managing form submission and input changes</li>
        </ul>
      </div>
    </div>
  );
}
