import styled from "styled-components";


export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100px;

    padding: 1rem;

    background-color: var(--color-grey-0);

    & > nav{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        max-width: 900px;
        width: 100%;

        margin: 0 auto;

        & > div{
            display: flex;
            align-items: center;
            justify-content: space-between;  
            width: 100%;   

            & > input{
                border: 1px solid var(--color-grey-100);
                height: 2rem;
                border-radius: 8px;
                width: 75%;
                position: relative;
            }

            & > .search-icon{
                position: relative;
                right: 30px;

                padding: 0.25rem;

                background-color: var(--color-primary);

                border-radius: 8px;
            }

            & > .cart-icon{
                position: relative;
                cursor: pointer;
            }

            & > span{
                background-color: var(--color-primary);
                padding: 0 0.25rem;

                color: var(--color-white);

                font-size: var(--font-size-text-2);
                font-weight: var(--font-weight-bold);

                border-radius: 4px;

                position: relative;
                bottom: 10px;
                right: 10px;
            }

            & > .out-icon{
                cursor: pointer;
            }

        }
    }

    @media(min-width: 768px) {
        & > nav {
            & > div {
                & > .search-icon{
                    right: 40px;
                }
                & > span{
                    right: 20px;
                }
            }               
        } 
    }

    @media(min-width: 900px) {
        & > nav {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            & > div {
                width: 50%;
                & > .search-icon{
                    right: 35px;
                }
                & > span{
                    right: 15px;
                }
            }               
        } 
    }
`

export const StyledMain = styled.main`
    max-width: 900px;
    width: 100%;

    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    & > ul{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
        overflow-x: scroll;

        width: 100%;
        height: fit-content;

        padding: 1rem;

        gap: 1rem;
    }

    @media(min-width: 900px) {
             & > ul {
                overflow-x: unset;
                flex-wrap: wrap;
                justify-content: space-between;
             }    
        } 
`