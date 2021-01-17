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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,500&display=swap" rel="stylesheet" />
      </Head>
      <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        height: 100%;
        font-family: 'Montserrat', sans-serif;
      }
      body {
        min-height: 100%;
      }
      a {
        text-decoration: none;
      }
      #__next {
        display: grid;
        grid-template-columns: 12fr;
        grid-template-rows: auto 10fr auto;
        grid-template-areas: 'header' 'main' 'footer';
        min-height: 100vh;
      }
      .common-layout {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
      }
      .header {
        grid-area: header;
        width: 100%;
        height: 48px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #1158c1;
      }
      .header__navigation { 
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .header__navigation-item {
        display: inline-block;
        height: 100%;
      }
      .header__navigation-link {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 16px;
        font-weight: 700;
        font-size: 16px;
        color: #fff;
        transition: background-color 0.23s ease-in-out;
      }
      .header__navigation-link:hover, 
      .header__navigation-link.active {
        background-color: #1e67d4;
      }
      .main {
        grid-area: main;
        padding-top: 48px;
      }
      .main__content {
        padding: 24px 0 64px 0; 
      }
      .footer {
        grid-area: footer;
        background: #5b5b5d;
      }
      .footer__content {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 128px;
      }
      .footer__text {
        display: inline-block;
        font-weight: 700;
        font-size: 16px;
        color: #fff;
      }
      `}</style>
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
        </nav>
      </header>
      <main className="main">
        <div className="main__content common-layout">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="footer__content common-layout">
          <span className="footer__text">{'I`m here to stay'}</span>
        </div>
      </footer>
    </>
  );
}
