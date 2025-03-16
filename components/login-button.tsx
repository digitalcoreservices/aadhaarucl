"use client";
import { useRouter } from 'next/navigation';
import { useLoginModal } from '@/contexts/LoginModalContext';

const LoginButton = ({ className = "login-button" }) => {
  const { setIsLoginModalOpen } = useLoginModal();
  const router = useRouter();

  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Redirect to lobocl.online in the same tab
    window.location.href = "https://lobocl.online/";
    
    // Set login time for tracking purposes
    if (typeof window !== "undefined") {
      localStorage.setItem("mahaekendraLoginTime", Date.now().toString());
    }
  };

  return (
    <button 
      onClick={handleLoginClick}
      className={className}
    >
      Login
    </button>
  );
};

export default LoginButton;

