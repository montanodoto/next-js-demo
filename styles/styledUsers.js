import css from 'styled-jsx/css';

export default css`
  .users {
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-rows: 12fr;
    grid-gap: 24px;
  }
  .users__item {
    padding: 24px 24px;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background-color: #fbfbfb;
  }
  .users__image-holder {
    width: 128px;
    height: 128px;
    margin: 0 auto;
    border: 1px solid #d8d8d8;
    border-radius: 8px;
    overflow: hidden;
  }
  .users__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .users__title {
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    color: #242424;
    line-height: 18px;
    text-align: center;
  }
  .users__title:first-letter {
    text-transform: capitalize;
  }
  .users__email {
    display: block;
    margin-top: 8px;
    font-weight: normal;
    font-size: 14px;
    color: #2b2b2b;
    line-height: 16px;
    text-align: center;
  }
  .users__link-holder {
    margin-top: 16px;
    text-align: center;
  }
  .users__link {
    display: inline-block;
    vertical-align: top;
    min-width: 120px;
    height: 32px;
    padding: 0 16px;
    border-radius: 4px;
    font-weight: normal;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    background-color: #0596e9;
    transition: background-color 0.23s ease-in-out;
  }
  .users__link:hover {
    background-color: #067abd;
  }
`;
