import { useEffect, useState } from "react";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { UserContext } from "../../contexts/userContext";

import logo from "./../../assets/logo.png";
import { iGetMenu, MenuContext } from "../../contexts/menuContext";
import { MenuCard } from "../../components/menuCard";
import { StyledHeader, StyledMain } from "./style";
import { ModalCart } from "../../components/modalCart";


export const Dashboard = () => {
  const [counter, setCounter] = useState(0);
  const [filteredMenu, setFilteredMenu] = useState([] as iGetMenu[])

  const { logout } = useContext(UserContext);
  const { getMenu, menu, showCart, openModalCart, cartList } =
    useContext(MenuContext);

  useEffect(() => {
    getMenu();
  }, []);

  const counting = () => {
    const value = cartList
      .map((item) => item.qntd)
      .reduce((acc, acv) => acc + acv, 0);
    setCounter(value);
  };

  useEffect(() => {
    counting();
  }, [cartList]);

  function search(event: any){
    const filteredArr = menu.filter((item) => (item.category.toLocaleUpperCase().includes((event.target.value).toLocaleUpperCase().trim())) || (item.name.toLocaleUpperCase().includes((event.target.value).toLocaleUpperCase().trim())) )

    setFilteredMenu(filteredArr)
  }

  return (
    <>
      {showCart && <ModalCart />}
      <StyledHeader>
        <nav>
          <img src={logo} />
          <div>
            <input type="text" onChange={search} />
            <FiSearch size="1.5rem" color="#ffffff" className="search-icon" />
            <FaShoppingCart
              size="1.5rem"
              className="cart-icon"
              color="#BDBDBD"
              onClick={openModalCart}
            />
            <span>{counter}</span>
            <RiLogoutBoxRFill 
            className="out-icon"
            size="1.5rem" color="#BDBDBD" onClick={logout} />
          </div>
        </nav>
      </StyledHeader>
      <StyledMain>
        <ul>
        {filteredMenu.length?
          filteredMenu.map((item: iGetMenu) => (
            <MenuCard
              key={item.id}
              name={item.name}
              category={item.category}
              price={item.price}
              id={item.id}
              img={item.img}
            />
          ))
          :
          menu.length &&
            menu.map((item: iGetMenu) => (
              <MenuCard
                key={item.id}
                name={item.name}
                category={item.category}
                price={item.price}
                id={item.id}
                img={item.img}
              />
            ))}
        </ul>
      </StyledMain>
    </>
  );
};
