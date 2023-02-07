import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { StyledMenuCard } from "./style";


interface iMenuCardProps {
    category: string | undefined;
    id: number | undefined;
    img: string | undefined;
    name: string | undefined;
    price: number | string;
}

export const MenuCard = ({ name, category, price, id, img }: iMenuCardProps) => {

    const { addToCart } = useContext(MenuContext)

    return (
        <StyledMenuCard >
            <div className="image" >
                <img src={img} />
            </div>
            <div className="details">
                <h3>{name}</h3>
                <span>{category}</span>
                <p>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <button id={id + ""} type="button" onClick={addToCart}>Adicionar</button>
            </div>            
        </StyledMenuCard>
    )
}