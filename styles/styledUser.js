import css from 'styled-jsx/css';

export default css`
  .user {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    padding: 24px 24px;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background-color: #fbfbfb;
  }
  .user__image-holder {
    width: 256px;
    height: 256px;
    margin: 0 auto;
    border: 1px solid #d8d8d8;
    border-radius: 8px;
    overflow: hidden;
  }
  .user__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .user__title {
    margin-top: 16px;
    font-weight: 700;
    font-size: 16px;
    color: #242424;
    line-height: 18px;
    text-align: center;
  }
  .user__title:first-letter {
    text-transform: capitalize;
  }
  .user__info {
    display: block;
    margin-top: 8px;
    font-weight: normal;
    font-size: 14px;
    color: #2b2b2b;
    line-height: 16px;
  }
  .user__link-holder {
    margin-top: 24px;
    text-align: center;
  }
  .user__link {
    display: inline-block;
    vertical-align: top;
    min-width: 120px;
    height: 32px;
    padding: 0 16px;
    border: none;
    outline: none;
    border-radius: 4px;
    font-weight: normal;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    background-color: #0596e9;
    transition: background-color 0.23s ease-in-out;
    cursor: pointer;
  }
  .user__link:hover {
    background-color: #067abd;
  }
`;
