import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');

    *{
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
        background: #737373;
    }
`

export default GlobalStyle;