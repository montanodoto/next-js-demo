import css from 'styled-jsx/css';

export default css.global`
  .loader {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(1, 12, 23, 0.7);
  }
  .loader__roller{
    display: inline-block;
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .loader__roller:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 0;
      height: 0;
      margin: 8px;
      box-sizing: border-box;
      border: 64px solid #fff;
      border-color: #007bff transparent #007bff transparent;
      animation: roller 2s infinite;
    }
    @keyframes roller {
      0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      50% {
        transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
      100% {
        transform: rotate(1800deg);
    }
    }
`;
