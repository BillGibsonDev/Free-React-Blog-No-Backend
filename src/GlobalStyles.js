import { createGlobalStyle } from "styled-components";

// theme
import * as palette from './Theme.js';

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        width: 90%;
        max-width: 800px;
        margin: auto;
        background: ${palette.backgroundColor};
        letter-spacing: .5px;
        font-family: 'Nunito', sans-serif;
    }
    a {
        text-decoration: none;
    }
`;