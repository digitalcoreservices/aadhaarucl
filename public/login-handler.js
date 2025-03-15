// This script will be injected into the lobocl.online site
// to handle login success and communicate back to the parent window

(function() {
  // Check if we're in an iframe
  const isInIframe = window !== window.parent;
  
  // Function to check if user is logged in
  function checkLoginStatus() {
    // This is a simplified example - you'll need to adapt this
    // to match how lobocl.online indicates a successful login
    const isLoggedIn = 
      document.querySelector('.logged-in-indicator') || // Example selector
      document.querySelector('.dashboard-link') || // Example selector
      document.querySelector('.admin-panel') || // Example selector
      window.location.href.includes('/admin') || // Check URL
      document.cookie.includes('auth=') || // Check cookies
      localStorage.getItem('auth_token'); // Check localStorage
    
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