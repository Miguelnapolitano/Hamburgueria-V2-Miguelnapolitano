import styled from "styled-components";

export const StyledModalCart = styled.div`
    width: 100vw;
    height: 100%;
    position: fixed;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);

    .modal{
        width: 30%;
        min-width: 300px;
        height: 70vh;

        background-color: var(--color-white);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        gap: 1rem;

        border-radius: 8px; 

        & > header {
            width: 100%;
            height: 50px;

            padding: 1rem;
            border-radius: 8px 8px 0 0;

            display: flex;
            justify-content: space-between;
            align-items: center;

            background-color: var(--color-primary);

            & > h3 {
                font-size: var(--font-size-3);
                font-weight: var(--font-weight-bold);

                color: var(--color-grey-0);
            }

            & > button {
                cursor: pointer;

                padding: 0.5rem;

                background-color: transparent;

                border-radius: 4px;

                border-style: none;

                font-size: var(--font-size-title-3);
                color: var(--color-grey-0)
            }
        }

        & > ul{
            width: 95%;
            height: 350px;

            display: flex;
            flex-direction: column;
            
            

            gap:0.5rem;

            overflow-y: auto;

            

            background-color: var(--color-grey-0);

            border-radius: 0.5rem;

            & > .empty{
                margin-top: 8rem;

                align-self: center;
                
                

                font-size: var(--font-size-title-2);
                font-weight: var(--font-weight-semiBold);
                color: var(--color-grey-600)
            }
        }

        & > .div-total {
            display: flex;

            width: 95%;
            align-items: center;
            justify-content: space-between;

            & > h4 {
                font-size: var(--font-size-title-3);
                
                color: var(--color-grey-600)
            }

            & > span{
                font-size: var(--font-size-text-1);
                font-weight: var(--font-weight-semiBold);
                color: var(--color-grey-600)
            }
        }

        & > .remove-all{
            margin-bottom: 1rem;
            
            height: 50px;
            width: 100%;
            max-width: 300px;

            background-color: var(--color-secondary);

            border-style: none;

            border-radius: 4px;

            color: var(--color-grey-0);
            font-size: var(--font-size-text-2);
            font-weight: var(--font-weight-semiBold);
        }
    }
`
