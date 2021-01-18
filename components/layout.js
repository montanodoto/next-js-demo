import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import styles from '../styles/styledLayout';

import classNames from 'classnames';

export default function Layout({ children, title = 'This is the default title' }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
              <a
                className={classNames({
                  active: pathname === '/',
                  'header__navigation-link': true,
                })}
              >
                Home
              </a>
            </Link>
          </span>
          <span className="header__navigation-item">
            <Link href="/users">
              <a
                className={classNames({
                  active: pathname === '/users',
                  'header__navigation-link': true,
                })}
              >
                Users
              </a>
            </Link>
          </span>
          <span className="header__navigation-item">
            <Link href="/posts">
              <a
                className={classNames({
                  active: pathname === '/posts',
                  'header__navigation-link': true,
                })}
              >
                Posts
              </a>
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
    </>
  );
}
