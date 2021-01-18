import css from 'styled-jsx/css';

export default css.global`
  .home {
    display: grid;
    grid-template-columns: repeat(3, minmax(25%, 1fr));
    grid-template-rows: 12fr;
    grid-gap: 24px;
  }
  .home__item{
    display: inline-block;
    padding: 24px 24px;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background-color: #fbfbfb;
  }
  .home__name{
    display: block;
    font-weight: 700;
    font-size: 16px;
    color: #242424;
    line-height: 18px;
  }
  .home__email{
    display: block;
    margin-top: 8px;
    font-weight: normal;
    font-size: 14px;
    color: #2b2b2b;
    line-height: 16px;
  }
  .home__body{
    display: block;
    margin-top: 12px;
    font-weight: normal;
    font-size: 14px;
    color: #2b2b2b;
    line-height: 16px;
  }
`;
