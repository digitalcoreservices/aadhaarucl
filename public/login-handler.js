// This script will be injected into the lobocl.online site
// to handle login success and communicate back to the parent window

(function() {
  // Check if we're in an iframe
  const isInIframe = window !== window.parent;
  
  // Function to check if user is logged in
  function checkLoginStatus() {
    // Check various indicators that might signal successful login
    const isLoggedIn = 
      // Check for common login success indicators
      document.querySelector('.logged-in-indicator') || 
      document.querySelector('.dashboard-link') || 
      document.querySelector('.admin-panel') || 
      document.querySelector('.user-profile') ||
      document.querySelector('.logout-button') ||
      
      // Check URL patterns that indicate successful login
      window.location.href.includes('/admin') || 
      window.location.href.includes('/dashboard') ||
      window.location.href.includes('/account') ||
      window.location.href.includes('/profile') ||
      
      // Check for authentication cookies or tokens
      document.cookie.includes('auth=') || 
      document.cookie.includes('session=') ||
      document.cookie.includes('token=') ||
      document.cookie.includes('logged_in=') ||
      
      // Check localStorage for auth tokens
      localStorage.getItem('auth_token') ||
      localStorage.getItem('token') ||
      localStorage.getItem('user');
    
    return isLoggedIn;
  }
  
  // Function to notify parent window of successful login
  function notifyLoginSuccess() {
    if (isInIframe) {
      // Send message to parent window
      window.parent.postMessage({ type: 'LOGIN_SUCCESS' }, '*');
    }
  }
  
  // Check login status periodically
  function startLoginCheck() {
    // Initial check
    if (checkLoginStatus()) {
      notifyLoginSuccess();
      return;
    }
    
    // Set up periodic checking
    const checkInterval = setInterval(() => {
      if (checkLoginStatus()) {
        notifyLoginSuccess();
        clearInterval(checkInterval);
      }
    }, 1000); // Check every second
    
    // Clean up after 5 minutes
    setTimeout(() => {
      clearInterval(checkInterval);
    }, 300000); // 5 minutes
  }
  
  // Start checking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startLoginCheck);
  } else {
    startLoginCheck();
  }
})();