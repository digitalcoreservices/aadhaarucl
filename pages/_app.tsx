import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Router>
      <Component {...pageProps} />
    </Router>
  );
}

export default MyApp;