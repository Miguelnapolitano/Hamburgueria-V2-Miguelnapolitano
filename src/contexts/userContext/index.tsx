import { createContext } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



interface iUserContextProps{
    children: React.ReactNode;
}

interface iUserContext{
    login: any;
    newUser: any;
    autoLogin: any;
    logout: any;
}

interface iDataLogin {
    email: string;
    password: string;
}

interface iDataRegister {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({ children }: iUserContextProps) => {

    const navigate = useNavigate()
  
    const login = async (data: iDataLogin) => {
        try{
            const response = await api.post("/login", data);

            if(response.status === 200){
                localStorage.setItem("@TOKEN__HAMBURG__V2", await response.data.accessToken)

                toast.success("Login feito com sucesso!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 1000,
                  });
                
                setTimeout(() => {
                    navigate('/dashboard')
                }, 1000)
                                
            }

        }catch(err: any){
            if (err.response.data === 'Cannot find user'){
                toast.warn("Usuário não encontrado", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 2000,
                  })
            }else if (err.response.data === 'Incorrect password'){
                toast.warn("Ops! Senha incorreta.", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 2000,
                  });
            }else{
                toast.error("Ops! Algo deu errado!", {
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 2000,
                  });
            }           
        }
    }

    const newUser = async (data: iDataRegister) => {
        try{
            const { name, email, password } = data
            const response = await api.post("/users", {name, email, password});            

            toast.success("Usuário cadastrado!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 1500,
              });

            setTimeout(() => navigate("/dashboard"), 2000);

        }catch(err){
            console.log(err)
        }

    }

    const autoLogin = async () => {
        const token = localStorage.getItem("@TOKEN__HAMBURG__V2")
        
        if (token) {
            try{
                const response = await api.get("/products", {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });

                if(response.status === 200) {
                    navigate("/dashboard")
                }

            }catch(err){
                console.log(err)
            }
        }
    }

    const logout = () => {
        navigate("/")
        window.localStorage.clear()
    }
  
    return (
      <UserContext.Provider value={{login, newUser, autoLogin, logout}}>
        {children}
      </UserContext.Provider>
    );
  };