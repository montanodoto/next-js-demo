import css from 'styled-jsx/css';

export default css.global`
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
    z-index: 1;
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
`;
