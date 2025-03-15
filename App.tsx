import React, { useEffect } from "react";
import { useRouter } from "next/router";

const App: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const checkRedirect = () => {
      const loginTime = localStorage.getItem("loginTime");

      if (loginTime) {
        const elapsedTime = (Date.now() - parseInt(loginTime, 10)) / (60 * 1000); // Convert to minutes

        if (elapsedTime >= 30) {
          localStorage.removeItem("loginTime"); // Clear storage
          window.location.href = "https://v0-mahaekendra-clone.vercel.app/"; // Redirect to homepage
        }
      }
    };

    checkRedirect();
  }, [router]);

  return (
    <div>
      <h1>Welcome to Mahaekendra</h1>
      {/* Your app content */}
    </div>
  );
};

export default App;