import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;        
    }


    h1, h2, h3, h4, h5, h6, p, span, a, button, input, input::placeholder, label {
        font-family: 'Inter', sans-serif;
    }

    button, a {
        cursor: pointer;
    }

    :root{
        --color-primary: #EB5757;
        --color-secondary: #27AE60;

        --color-primary-focus: #FF427F;
        --color-primary-disable: #59323F;
        --color-white: #FFFFFF;

        --color-grey-0: #F5F5F5;
        --color-grey-100: #E0E0E0;
        --color-grey-300: #828282;
        --color-grey-600: #333333;
      
        --color-feedback-success: #168821;
        --color-feedback-negative: #E60000;
        --color-feedback-warning: #FFCD07;
        --color-feedback-information: #155BCB;


        --font-size-title-1: 1.625rem;
        --font-size-title-2: 1.375rem;
        --font-size-title-3: 1.125rem;

        --font-size-text-1: 1rem;
        --font-size-text-2: 0.875rem;
        --font-size-text-3: 0.75rem;

        --font-weight-bold: 700;
        --font-weight-semiBold: 600;
        --font-weight-regular: 400;
        
    }


    .container{
        max-width: 900px;
        margin: 0 auto;
    }
`