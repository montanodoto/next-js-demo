import { useEffect, useState } from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
