import { useState } from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface iMenuContext {
  getMenu: () => void;
  menu: Array<iGetMenu>;
  addToCart: (event: any) => void;
  showCart: boolean;
  openModalCart: () => void;
  closeModalCart: () => void;
  cartList: Array<iCartList>;
  removeFromCart: (event: any) => void;
  plusOne: (event: any) => void;
  lessOne: (event: any) => void;
  removeAllFromCart: () => void;
}

interface iMenuContextProps {
  children: React.ReactNode;
}

export interface iGetMenu {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

export interface iCartList {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  qntd: number;
}

export const MenuContext = createContext({} as iMenuContext);

export const MenuProvider = ({ children }: iMenuContextProps) => {
  const [menu, setMenu] = useState<iGetMenu[]>([]);
  const [cartList, setCartList] = useState<iCartList[]>([]);
  const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate()

  const getMenu = async () => {
    const token = localStorage.getItem("@TOKEN__HAMBURG__V2");

    try {
      const response = await api.get("/products", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setMenu(response.data);
    } catch (err) {
      navigate("/");
    }
  };

  const addToCart = (event: any) => {
    const productAddedIndex = cartList.findIndex(
      (item) => item.id == event.target.id
    );
    if (productAddedIndex == -1) {
      const productAdded = menu.find((item) => item.id == event.target.id);

      const newProductAdded = { ...productAdded!, qntd: 1 };
      const newCart: iCartList[] = [...cartList, newProductAdded];
      setCartList(newCart);
    } else {
      const newCart = cartList.map((item, index) => {
        if (index == productAddedIndex) {
          return { ...item, qntd: item.qntd + 1 };
        } else {
          return item;
        }
      });
      setCartList(newCart);
    }
    toast.success("Produto adicionado!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 500,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  const removeFromCart = (event: any) => {
    const productId = event.target.id;
    const newCart = cartList.filter((item) => item.id != productId);
    setCartList(newCart);
  };

  const plusOne = (event: any) => {

    const productAddedIndex = cartList.findIndex(
      (item) => item.id == event.target.id
    );
    const newCart = cartList.map((item, index) => {
      if (index == productAddedIndex) {
        return { ...item, qntd: item.qntd + 1 };
      } else {
        return item;
      }
    });

    setCartList(newCart);
  };

  const lessOne = (event: any) => {
    const productAddedIndex = cartList.findIndex(
      (item) => item.id == event.target.id
    );
    if (cartList[productAddedIndex].qntd > 1) {
      const newCart = cartList.map((item, index) => {
        if (index == productAddedIndex) {
          return { ...item, qntd: item.qntd - 1 };
        } else {
          return item;
        }
      });

      setCartList(newCart);
    }
  };

  const removeAllFromCart = () => {
    setCartList([])
  }

  const openModalCart = () => {
    setShowCart(true);
  };

  const closeModalCart = () => {
    setShowCart(false);
  };
  return (
    <MenuContext.Provider
      value={{
        getMenu,
        menu,
        addToCart,
        showCart,
        openModalCart,
        closeModalCart,
        cartList,
        removeFromCart,
        plusOne,
        lessOne,
        removeAllFromCart
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
