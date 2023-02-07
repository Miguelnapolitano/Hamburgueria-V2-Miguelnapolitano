import styled from "styled-components";


export const StyledCardCart = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 98%;
    height: 100px;

    background-color: var(--color-white);


    .global{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;

        width: fit-content;
        height: 90px;

        & > img{
            scale: 1.3;
            width: 80px;
            height: 150px;
            
            max-height: 100%;
            background-color: var(--color-grey-0);

            padding-left: 1rem;
        }

        & > .div-name{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 1rem;

            & > h2{
                font-size: var(--font-size-title-3);
                
                color: var(--color-grey-600)
            }

            & > .div-qntd{

                & > span {
                   
                    font-size: var(--font-size-text-1);
                    font-weight: var(--font-weight-semiBold);
                    padding: 0.25rem 1rem;
                    border: 1px solid var(--color-grey-100);
                }

                & > button {
                    padding:0.25rem 0.5rem;
                    font-size: var(--font-size-text-1);
                    font-weight: var(--font-weight-semiBold);
                    color: var(--color-primary);

                    border: 1px solid transparent;

                    cursor: pointer;
                }
            }
        }

        
    }

    .button-trash{
        cursor: pointer;

        position: relative;
        z-index: 2;

        background-color: transparent;

        border: none;

        margin-right: 1rem;
        
        padding: 8px;
    }

    .trash{
        position: relative;
        z-index: 0;

        scale: 1.3;        

    }

    .button-trash:hover{
        transition: 0.4s;
        transform: scale(1.3);
    }
`