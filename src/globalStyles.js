import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --border : 1px solid white;
    --fontFamily : "Helvetica Neue", Helvetica, Arial, sans-serif;
    --grayBg : #222;
    --linkColor : #757575;
    --accordionGray : #303030;
    --buttonColor : #e50914;
    --buttonColorHover : #f40612;
  }
  
  * {
    box-sizing: border-box;
  }

  input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

  html, body {
    font-family: var(--fontFamily);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color : #333333;
    font-size: 16px;
  }

  
  #root {
    width: 100%;
  }

  body {
    width: 100%;
    min-height: 100vh;
  }

  .App {
    width: min(100%, 1900px);
    margin: auto;
  }


  a {
    text-decoration: none;
  }
`;
