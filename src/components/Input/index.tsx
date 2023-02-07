import { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";


interface iInput extends InputHTMLAttributes<HTMLInputElement>{
    type: "email" | "text" | "password";
    label: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: string | undefined;
}

export const Input = ({type, label, placeholder, register, error, ...rest}:iInput) => {
    return(
        <StyledInput>
            <label>{label}</label>
            <input placeholder={placeholder} type={type} {...register} {...rest}/>
            <span>{error}</span>
        </StyledInput>
    )
}