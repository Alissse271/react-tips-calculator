import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

a {
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
    font-size: 16px;
}

* {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap');
    font-family: 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

button {
    display: inline-block;
    box-shadow: none;
    border-color: transparent;
    background: none;
    cursor: pointer;
}

h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

img {
    padding: 0;
    margin: 0;
}`;
