import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        text-transform: none;
        box-sizing: border-box;
        outline: none;
    }

    html, border-style, #root {
        height: 100%;
    }

    *, input, button {
        border: 0;
        outline: none;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

`;
