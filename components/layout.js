import Link from 'next/link';
import Head from 'next/head';
import Loader from './loader';

import styles from '../styles/styledLayout';

export default function Layout({ children, title = 'This is the default title' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>
        {styles}
      </style>
      <header className="header">
        <nav className="header__navigation common-layout">
          <span className="header__navigation-item">
            <Link href="/">
              <a className="header__navigation-link">Home</a>
            </Link>
          </span>
          <span className="header__navigation-item">
            <Link href="/users">
              <a className="header__navigation-link">Users</a>
            </Link>
          </span>
          <span className="header__navigation-item">
            <Link href="/posts">
              <a className="header__navigation-link">Posts</a>
            </Link>
          </span>
        </nav>
      </header>
      <main className="main">
        <div className="main__content common-layout">{children}</div>
      </main>
      <footer className="footer">
        <div className="footer__content common-layout">
          <span className="footer__text">{'I`m here to stay'}</span>
        </div>
      </footer>
      <Loader />
    </>
  );
}
