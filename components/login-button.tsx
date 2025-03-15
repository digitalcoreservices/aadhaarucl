"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated to next/navigation
import LoginIframe from './LoginIframe';
import { useLoginModal } from '@/contexts/LoginModalContext';

const LoginButton = ({ className = "login-button" }) => {
  // Use the global login modal context
  const { isLoginModalOpen, setIsLoginModalOpen } = useLoginModal();
  const router = useRouter(); // Next.js router

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Toggle modal visibility if needed
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <button 
        onClick={handleLoginClick}
        className={className}
      >
        Login
      </button>

      <LoginIframe 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        // If you need to navigate after closing, use router.push instead
        // onAfterClose={() => router.push('/dashboard')}
      />
    </>
  );
};

export default LoginButton;

