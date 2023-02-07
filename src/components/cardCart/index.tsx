import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { MenuContext } from "../../contexts/menuContext";
import { StyledCardCart } from "./style"

export interface iCardCartProps{
    img: string;
    name: string;
    id: number;
    qntd: number;
}

export const CardCart = ({img, name, id, qntd}: iCardCartProps) => {

    const { removeFromCart, plusOne, lessOne } = useContext(MenuContext);

    return (
        <StyledCardCart id={id+""}>
            <div className="global">
                <img src={img}/>
                <div className="div-name">
                    <h2>{name}</h2>
                    <div className="div-qntd">
                        <button id={id+""} onClick={lessOne}>-</button>
                        <span>{qntd}</span>
                        <button id={id+""} onClick={plusOne}>+</button>
                    </div>
                </div>
            </div>
            <button id={id+""} onClick={removeFromCart} className="button-trash">
                <FaTrash  className="trash" color="#828282"/>
            </button>
            
        </StyledCardCart>
    )
}