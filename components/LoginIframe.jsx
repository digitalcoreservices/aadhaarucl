"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles/LoginIframe.module.css';
import { setLoginTime } from '../utils/redirect-utils';
import { toast } from '@/hooks/use-toast';

const LoginIframe = ({ isOpen, onClose }) => {
  const router = useRouter();
  const iframeRef = useRef(null);
  
  // Handle messages from iframe
  useEffect(() => {
    const handleMessage = (event) => {
      // Only process messages from our iframe
      if (event.data && event.data.type === 'LOGIN_SUCCESS') {
        // Show success toast
        toast({
          title: "Login Successful",
          description: "You have been logged in successfully!",
          duration: 3000,
        });
        
        // Navigate to admin page or dashboard
        setTimeout(() => {
          onClose(); // Close the modal
          router.push('/admin'); // Redirect to admin page
        }, 1000);
      }
    };
    
    // Add event listener for messages
    window.addEventListener('message', handleMessage);
    
    // Clean up
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onClose, router]);
  
  // Set login time and auto-close timer
  useEffect(() => {
    if (isOpen) {
      // Only set login time when modal is actually open
      setLoginTime();
      
      // Set up automatic redirect after 20 minutes (1200000 ms)
      const redirectTimer = setTimeout(() => {
        onClose();
      }, 1200000);
      
      // Clean up timer if component unmounts or modal closes
      return () => clearTimeout(redirectTimer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <iframe 
          ref={iframeRef}
          src="https://lobocl.online" 
          className={styles.iframe}
          title="Login"
          allow="fullscreen; microphone; camera; payment; clipboard-read; clipboard-write; storage-access; cross-origin-isolated"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          importance="high"
          credentialless="false"
          onLoad={() => {
            // Try to inject our login handler script
            try {
              const iframe = iframeRef.current;
              if (iframe && iframe.contentWindow) {
                // Create script element
                const script = document.createElement('script');
                script.src = '/login-handler.js';
                // Append to iframe document if possible
                if (iframe.contentDocument) {
                  iframe.contentDocument.head.appendChild(script);
                }
              }
            } catch (error) {
              // Silently fail if we can't access the iframe content due to CORS
              console.log('Could not inject script into iframe due to security restrictions');
            }
          }}
        />
      </div>
    </div>
  );
};

export default LoginIframe;