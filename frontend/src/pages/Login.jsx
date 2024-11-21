import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handles input changes
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear field-specific error
  };

  // Simple validation logic
  const validateForm = () => {
    const newErrors = {};
    if (currentState === 'Sign Up' && !formData.name) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    return newErrors;
  };

  // Form submission handler
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(`${currentState} successful!`);
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      aria-labelledby="form-header"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p id="form-header" className="prata-regular text-3xl">
          {currentState}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      
      {currentState === 'Sign Up' && (
        <div className="w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-800'}`}
            placeholder="Name"
            aria-label="Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
      )}

      <div className="w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-800'}`}
          placeholder="Email"
          aria-label="Email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="w-full">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onInputChange}
          className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-800'}`}
          placeholder="Password"
          aria-label="Password"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer text-gray-600" onClick={() => alert('Redirect to password recovery')}>
          Forgot your password?
        </p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-blue-500">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-blue-500">
            Login Here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Processing...' : currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
