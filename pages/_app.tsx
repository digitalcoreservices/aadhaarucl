import dynamic from 'next/dynamic';
import '../styles/globals.css';

// Dynamically import BrowserRouter with SSR disabled
const RouterWrapper = dynamic(
  () => import('react-router-dom').then((mod) => {
    const { BrowserRouter } = mod;
    return ({ children }: { children: React.ReactNode }) => <BrowserRouter>{children}</BrowserRouter>;
  }),
  { ssr: false }
);

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      {typeof window === 'undefined' ? (
        <Component {...pageProps} />
      ) : (
        <RouterWrapper>
          <Component {...pageProps} />
        </RouterWrapper>
      )}
    </>
  );
}

export default MyApp;