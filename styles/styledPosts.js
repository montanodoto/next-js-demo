import css from 'styled-jsx/css';

export default css`
  .posts {
    column-count: 3;
    break-inside: avoid;
    column-gap: 0px;
  }
  .posts__item {
    display: inline-block;
    vertical-align: top;
    margin: 8px;
    padding: 24px 24px;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    background-color: #fbfbfb;
  }
  .posts__head {
    height: 48px;
    position: relative;
    padding-left: 60px;
  }
  .posts__avatar-link{
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .posts__avatar{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .posts__user-name{
    display: block;
    font-weight: 700x;
    font-size: 16px;
    color: #212529;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .posts__user-email{
    display: block;
    font-weight: 400;
    font-size: 12px;
    color: #6c757d;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .posts__body {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #dee2e6;
  }
  .posts__image {
    display: block;
    width: 100%;
  }
  .posts__tags{
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
  }
  .posts__tag{
    display: inline-block;
    height: 20px;
    padding: 0 8px;
    margin-right: 6px;
    border-radius: 8px;
    font-weight: 400;
    font-size: 12px;
    color: #fff;
    line-height: 20px;
    background: #0087ff;
  }
  .posts__tag:last-child{
    margin-right: 0;
  }
  .posts__description {
    margin-top: 8px;
    font-weight: 400;
    font-size: 14px;
    color: #212529;
  }
  .posts__like-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
  }
  .posts__likes {
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    color: #212529;
    line-height: 24px;
  }
  .posts__likes-date{
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    color: #6c757d;
    line-height: 24px;
  }
  .posts__foot{
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #dee2e6;
  }
  .posts__details-link {
    display: inline-block;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 14px;
    color: #0087ff;
    line-height: 16px;
    text-decoration: underline;
  }
  .posts__details-link:last-child{
    margin-bottom: 0;
  }
   @media screen and (max-width: 1023px) {
    .posts {
      column-count: 2;
    }
  }
  @media screen and (max-width: 767px) {
    .posts {
      column-count: 1;
    }
  }
`;
