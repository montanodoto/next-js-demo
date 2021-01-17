import { useEffect, useState } from 'react';
import Router from 'next/router';

import LoadingOverlay from 'react-loading-overlay';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
  }, []);

  return (
    <LoadingOverlay active={loading} spinner text="Loading your content...">
      <Component {...pageProps} />
    </LoadingOverlay>
  );
}

export default MyApp;
