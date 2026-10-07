import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import BrandPanel from '../components/BrandPanel';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    setStatusMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Simple validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage('Account created successfully. You can now sign in.');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-[#09090B]">
      {/* Left Brand Panel: Hidden on mobile, visible on desktop */}
      <BrandPanel />

      {/* Right Form Panel: Centered on mobile and desktop */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-[360px] flex flex-col">
          {/* Heading: Inter 600, #F4F4F5, tracking -0.02em */}
          <h2 className="text-2xl font-semibold tracking-tight text-[#F4F4F5] mb-2">
            Create account
          </h2>
          <p className="text-xs text-[#A1A1AA] mb-8">
            Register for a secure boardroom credential.
          </p>

          {statusMessage && (
            <div className="p-3 mb-5 bg-[#18181B] border border-[#71717A] text-xs text-[#F4F4F5]">
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="w-full">
            <FormInput
              label="Username"
              id="signup-username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              name="username"
              error={errors.username}
              placeholder="johndoe"
              required
            />

            <FormInput
              label="Email address"
              id="signup-email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              error={errors.email}
              placeholder="name@company.com"
              required
            />

            <FormInput
              label="Password"
              id="signup-password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              error={errors.password}
              placeholder="••••••••"
              required
            />

            <FormInput
              label="Confirm password"
              id="signup-confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              error={errors.confirmPassword}
              placeholder="••••••••"
              required
            />

            <div className="mt-6">
              <PrimaryButton disabled={isLoading}>
                {isLoading ? 'Creating account...' : 'Create account'}
              </PrimaryButton>
            </div>
          </form>

          {/* Navigation link to Login */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#A1A1AA]">
              Already have an account?{' '}
              <a
                href="#login"
                className="font-medium text-[#F4F4F5] hover:text-[#A1A1AA] underline underline-offset-4 transition-colors"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
