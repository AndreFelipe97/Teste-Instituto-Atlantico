 
import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        overflow: hidden
    }
    html, body, root {
        min-height: 100%;
    }
    body {
        background-image: linear-gradient(
            to right bottom,
            rgba(126, 213, 111, 0.8),
            rgba(40, 180, 131, 0.8)
          );
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    button {
        cursor: pointer;
    }
`;