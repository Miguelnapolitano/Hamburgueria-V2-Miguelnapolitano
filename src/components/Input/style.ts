import styled from "styled-components";

export const  StyledInput = styled.fieldset`
    display: flex;
    flex-direction: column;

    border-style: none;

    & > input{
        height: 40px;

        padding: 0.5rem;

        border-radius: 8px;
        border: 1px solid var(--color-grey-300);

        font-size: var(--font-size-text-1);
        color: var(--color-grey-600);

        position: relative;
    }

    & > input:focus{
        border: 1px solid var(--color-primary-focus);
    }

    & > input::placeholder{
        font-size: var(--font-size-text-1);
        color: var(--color-grey-300);
    }

    & > label {
        font-size: var(--font-size-text-3);
        color: var(--color-grey-600);

        position: relative;
        top: 12px;
        left: 8px;
        z-index: 1;

        width: fit-content;

        padding: 4px;

        background-color: var(--color-white);
    }

    & > span {
        font-size: var(--font-size-text-3);
        color: var(--color-feedback-negative);
        margin:0.25rem;        
    }

`