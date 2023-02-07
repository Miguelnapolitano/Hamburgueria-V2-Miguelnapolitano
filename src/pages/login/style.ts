import styled from "styled-components";


export const StyledLoginPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    width: 100%;
    min-height: 100vh;
    max-width: 900px;

    margin: 0 auto;

    padding: 1rem;

    & > .section-slogan{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        width: 100%;
        max-width: 400px;

        & > div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;

            border: 1px solid var(--color-grey-0);
            border-radius: 8px;

            padding: 0.5rem;

            & > p {
                font-size: var(--font-size-text-2);
                font-weight: var(--font-weight-regular);
                color: var(--color-grey-300); 
                    
            }
        }
    }
    & > .section-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        width: 100%;
        max-width: 400px;

        & > h2{
            font-size: var(--font-size-title-3);
            font-weight: var(--font-weight-bold);
            color: var(--color-grey-600);
        }

        & > form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: .5rem;

            & > button{
                width: 100%;
                height: 50px;

                background-color: var(--color-primary);

                font-size: var(--font-size-text-1);
                font-weight: var(--font-weight-semiBold);
                color: var(--color-white);

                border-style: none;

                border-radius: 8px;
            }
        }

        & > span {
                font-size: var(--font-size-text-2);
                font-weight: var(--font-weight-regular);
                color: var(--color-grey-300); 
                text-align: center;
        }
        & > a {
                width: 100%;
                height: 50px;

                background-color: var(--color-grey-0);

                font-size: var(--font-size-text-1);
                font-weight: var(--font-weight-semiBold);
                color: var(--color-grey-300);
                text-decoration: none;
                

                border-style: none;

                border-radius: 8px;

                display: flex;
                align-items: center;
                justify-content: center;

        }
    }

    @media(min-width: 768px) {
        flex-direction: row;
        gap: 2rem;

        & > .section-form{
            border: 1px solid var(--color-grey-0);
            border-radius: 8px;

            padding: 2rem;
        }
    }
`
