import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f8f8f8;
    }
    header {
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;
    }
    nav a {
        margin: 0 15px;
        color: white;
        text-decoration: none;
    }
    .product-card {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        background-color: white;
        border-radius: 5px;
        text-align: center;
    }
`;

export default GlobalStyle;
