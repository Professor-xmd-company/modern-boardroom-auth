import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
  const [hash, setHash] = useState(window.location.hash || '#login');

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash || '#login');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isLogin = hash === '#login' || hash === '';
  const isSignUp = hash === '#signup';

  return (
    <main className="min-h-screen bg-[#09090B]">
      {/* Login View */}
      <div
        className={isLogin ? 'block' : 'hidden'}
        aria-hidden={!isLogin}
        {...(!isLogin ? { inert: '' } : {})}
      >
        <LoginPage />
      </div>

      {/* Sign Up View */}
      <div
        className={isSignUp ? 'block' : 'hidden'}
        aria-hidden={!isSignUp}
        {...(!isSignUp ? { inert: '' } : {})}
      >
        <SignUpPage />
      </div>
    </main>
  );
}
