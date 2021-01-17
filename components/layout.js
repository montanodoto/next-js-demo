import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, title = 'This is the default title' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="preload stylesheet"
          as="font"
        />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users</a>
          </Link>
        </nav>
      </header>

      {children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>

      <footer>{'I`m here to stay'}</footer>
    </>
  );
}
