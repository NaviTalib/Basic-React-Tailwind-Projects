import React, { useState } from 'react';

export default function UserRegistrationForm() {
  // Form input state
  const [formData, setFormData] = useState({
    username: '',
    role: 'user', // Default selection
    companyName: '',
  });

  // UI & Validation state
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Unified change handler for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit handler with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (formData.role === 'business' && !formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required for business accounts';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
    }
  };

  // 1. Conditional Rendering: Success message post-submission
  if (isSubmitted) {
    return (
      <div className="success-banner">
        <h2>Registration Complete!</h2>
        <p>Welcome, {formData.username} ({formData.role})</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      {/* Controlled Input: Username */}
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {/* 2. Conditional Rendering: Logical AND for error message */}
        {errors.username && <span className="error">{errors.username}</span>}
      </div>

      {/* Controlled Select: Role */}
      <div>
        <label>Account Type:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="user">Individual</option>
          <option value="business">Business</option>
        </select>
      </div>

      {/* 3. Conditional Rendering: Dynamic form field based on role selection */}
      {formData.role === 'business' && (
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          {errors.companyName && <span className="error">{errors.companyName}</span>}
        </div>
      )}

      <button type="submit">Register</button>
    </form>
  );
}