import styled from "styled-components";


export const StyledRegisterPage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    width: 100%;
    min-height: 100vh;
    max-width: 500px;

    margin: 0 auto;

    padding: 1rem;

    & > .section-slogan{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;

    }

    & > .section-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        width: 100%;

        & > div{
                display: flex;
                align-items: center;
                justify-content: space-between;

                width: 100%;

                & > h2{
                    font-size: var(--font-size-title-2);
                    font-weight: var(--font-weight-bold);
                    color: var(--color-grey-600);
                }
            }

        & > form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.5rem;
            

            & > button{
                width: 100%;
                height: 50px;

                background-color: var(--color-primary);

                font-size: var(--font-size-text-1);
                font-weight: var(--font-weight-semiBold);
                color: var(--color-white);

                border-style: none;

                border-radius: 8px;

                margin-top: 2rem;
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
`