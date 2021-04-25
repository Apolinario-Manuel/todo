import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/pixelToViewport";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

  
    :root {
        font-size: ${px2vw(48)};

        @media (min-width: 768px) {
            font-size: ${px2vw(28)};
        }

        @media (min-width: 1024px) {
            font-size: ${px2vw(16)};
        }

        @media (min-width: 1440px) {
            font-size: ${px2vw(10)};
        }
    }
`