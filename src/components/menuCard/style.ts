import styled from "styled-components";

export const StyledMenuCard = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    border: 2px solid var(--color-grey-0);
    border-radius: 8px;
    min-width: 225px;
    max-height: 400px;


    :hover{
        box-shadow: rgba(235, 87, 87, 0.6) 0px 10px 15px;
    }

    .image{
        width: 100%;
        max-height: 150px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
    }
    .details{
        width: 100%;
        height: 50%;
        box-sizing: border-box;
        margin: 1rem 0;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    h3{
        margin: 0;
        color: #333333;
        font-size: 1.175rem;
        font-weight: 700;
        font-family: "Inter", sans-serif;
    }
    span{
        margin: 0;
        color: #333333;
        font-size: .75rem;
        font-weight: 400;
        font-family: "Inter", sans-serif;
    }
    p{
        margin: 0;
        color: var(--color-primary);
        font-size: .875rem;
        font-weight: 600;
        font-family: "Inter", sans-serif;
    }
    button{
        height: 40px;
        width: 120px;
        padding: 0 20px;
        box-sizing: border-box;
        border-radius: 8px;
        border: 2px solid var(--color-primary);
        background-color: var(--color-primary);
        color: #ffffff;
        font-family: "Inter", sans-serif;
        font-size: 14px;
        font-weight: 500;
        :hover {
            filter: brightness(120%);
            cursor: pointer;
        }
    }
`