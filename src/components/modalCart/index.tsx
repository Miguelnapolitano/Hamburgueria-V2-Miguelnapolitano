import { useContext, useEffect, useState } from "react";
import { iCartList, MenuContext } from "../../contexts/menuContext";
import { CardCart } from "../cardCart";
import { StyledModalCart } from "./style"


export const ModalCart = () => {

    const [total, setTotal] = useState(0)

    const { closeModalCart, cartList, removeAllFromCart } = useContext(MenuContext);
    
    const totalCalc = () => {
        const value = cartList.map((item) => item.price * item.qntd).reduce((acc, acv) => acc + acv, 0)
        setTotal(value)
    }

    useEffect(() => {
        totalCalc()
    }, [cartList])

    return (
        <StyledModalCart>
            <div className="modal">
                <header>
                    <h3>Carrinho de compras</h3>
                    <button onClick={closeModalCart}>X</button>
                </header>
                <ul>
                    {
                        !cartList.length?
                        <li className="empty">Não há itens no carrinho :(</li>
                        :
                        cartList.map((item: iCartList) => 
                            
                            <CardCart key={item.id} img={item.img + ""} name={item.name} id={item.id} qntd={item.qntd}/>)
                    }

                </ul>
                <div className="div-total">
                    <h4>Total</h4>
                    <span>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>                
                </div>
                <button className="remove-all" onClick={removeAllFromCart}>Remover Todos</button>
            </div>
        </StyledModalCart>
)
}
