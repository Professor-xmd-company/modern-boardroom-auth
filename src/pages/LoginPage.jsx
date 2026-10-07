import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import BrandPanel from '../components/BrandPanel';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (formData.email === 'admin@boardroom.com' && formData.password === 'password123') {
        setStatusMessage('Authentication successful. Redirecting...');
      } else {
        setErrors({
          email: 'Invalid credentials. Try admin@boardroom.com / password123',
        });
      }
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
            Welcome back
          </h2>
          <p className="text-xs text-[#A1A1AA] mb-8">
            Access the secure boardroom interface.
          </p>

          {statusMessage && (
            <div className="p-3 mb-5 bg-[#18181B] border border-[#71717A] text-xs text-[#F4F4F5]">
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="w-full">
            <FormInput
              label="Email address"
              id="login-email"
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
              id="login-password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              name="password"
              error={errors.password}
              placeholder="••••••••"
              required
            />

            <div className="mt-6">
              <PrimaryButton disabled={isLoading}>
                {isLoading ? 'Authenticating...' : 'Sign in'}
              </PrimaryButton>
            </div>
          </form>

          {/* Navigation link to Sign-up */}
          <div className="mt-6 text-center">
            <p className="text-xs text-[#A1A1AA]">
              Don't have an account?{' '}
              <a
                href="#signup"
                className="font-medium text-[#F4F4F5] hover:text-[#A1A1AA] underline underline-offset-4 transition-colors"
              >
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
