import { useContext } from "react";
import { useForm } from "react-hook-form";
import {FiShoppingBag} from "react-icons/fi"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input";
import { UserContext } from "../../contexts/userContext";
import logo from "./../../assets/logo.png"
import { StyledRegisterPage } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IRegisterData {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    
}

export const RegisterPage = () => {

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório"),
        password: yup
          .string()
          .required("Senha obrigatória")          
          .min(6, "Mínimo de 6 caracteres"),
        passwordConfirm: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref('password')], 'As senhas não são iguais.')
      });

    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterData>({resolver: yupResolver(formSchema), });

    const { newUser } = useContext(UserContext)        


    return (
        <StyledRegisterPage>
            <section className="section-slogan">
                <img src={logo}/>
            </section>

            <section className="section-form">
                <div>
                    <h2>Cadastro</h2>
                    <Link to="/">Voltar ao login</Link>
                </div>
                <form onSubmit={handleSubmit(newUser)}>
                    <Input type={"text"} label={"Nome"} placeholder={"Nome..."} register={register('name')} error={errors.name?.message}/>                    

                    <Input type={"email"} label={"Email"} placeholder={"Email..."} register={register('email')} error={errors.email?.message}/>
                    
                    <Input type={"password"} label={"Senha"} placeholder={"Senha..."} register={register('password')} error={errors.password?.message}/>

                    <Input type={"password"} label={"Confirmar Senha"} placeholder={"Confirmação de Senha..."} register={register('passwordConfirm')} error={errors.passwordConfirm?.message}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </section>
        </StyledRegisterPage>
    )
}