import { useEffect, useState } from 'preact/hooks';
import Router from 'next/router';

import Loader from '../components/loader';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {loading && <Loader />}
    </>
  );
}

export default MyApp;
