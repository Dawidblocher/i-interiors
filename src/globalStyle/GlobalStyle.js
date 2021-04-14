import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');


    *{
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        background: #fff;
    }

    h1{
        margin-top: 0;
    }
`

export default GlobalStyle;