import {Link} from "react-router-dom"
import logo from "./../../assets/logo.png"
import {FiShoppingBag} from "react-icons/fi"
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import { useContext, useEffect } from "react";
import { StyledLoginPage } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IloginData {
    email: string;
    password: string;
}

export const LoginPage = () => {

    const formSchema = yup.object().shape({
        email: yup.string().required("Email obrigatório"),
        password: yup
          .string()
          .required("Senha obrigatória"),
        
      });



    const { register, handleSubmit, formState: { errors } } = useForm<IloginData>({resolver: yupResolver(formSchema), });

    const { login, autoLogin } = useContext(UserContext)

    useEffect(()=>{
        autoLogin();
    }, [])

    return (
        <StyledLoginPage>
            
            <section className="section-slogan">
                <img src={logo}/>
                <div>
                    <FiShoppingBag color="#27AE60"
                    size="5rem"/>
                    <p>A vida é como um sanduíche, é preciso recheá-la com os <strong>melhores</strong> ingredientes.</p>
                </div>
            </section>
            <section className="section-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(login)}>
                    <Input type={"email"} label={"Email"} placeholder={"Email..."} register={register('email')} error={errors.email?.message}/>
                    
                    <Input type={"password"} label={"Senha"} placeholder={"Senha..."} register={register('password')} error={errors.password?.message}/>
                    
                    <button type="submit">Logar</button>
                </form>
                <span>Crie sua conta para saborear muitas delícias e matar sua fome!</span>
                <Link to="/register">Cadastre-se</Link>    
            </section>
        </StyledLoginPage>
    )
}