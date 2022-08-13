import { createContext, useState, useRef, useContext } from "react";
import { DataContext } from "./DataProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [arrayShoppingCarts, setArrayShoppingCarts] = useState(
    JSON.parse(localStorage.getItem("shoppingcart")) ?? []
  );
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [quantityProductCart, setQuantityProductCart] = useState(0);
  const textNumber = useRef();

  const textNumbercart = useRef();
  const { dataProduct } = useContext(DataContext);

  function getMensaje(name) {
    toast.info(`! se borrado de lista (${name})`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function handleDeleteProduct(code, name) {
    const newArray = arrayShoppingCarts.filter(
      (arrayShoppingCart) => arrayShoppingCart.CartShopping.id !== Number(code)
    );
    setArrayShoppingCarts(newArray);
    localStorage.setItem("shoppingcart", JSON.stringify(newArray));
    getMensaje(name);
  }
  const limpiarCartBuy = () => {
    setArrayShoppingCarts([]);
    localStorage.setItem("shoppingcart", JSON.stringify([]));
  };
  const getItemsCart = (id) => {
    return arrayShoppingCarts.findIndex(
      (arrayShoppingCart) => arrayShoppingCart.CartShopping.id === Number(id)
    );
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const saveInCart = (CartShopping, user_id) => {
    const objeto = {
      CartShopping,
      user_id,
      quantity: Number(textNumber.current.innerText),
    };

    const items = getItemsCart(dataProduct.idPro);
    if (items === -1) {
      textNumber.current.innerText = Number(textNumber.current.innerText);
      setQuantityProduct(textNumber.current.innerText);
      arrayShoppingCarts[arrayShoppingCarts.length] = objeto;
      setArrayShoppingCarts([...arrayShoppingCarts]);
    } else {
      textNumber.current.innerText = Number(textNumber.current.innerText);
      const total =
        Number(arrayShoppingCarts[items].quantity) +
        Number(textNumber.current.innerText);

      arrayShoppingCarts[items].quantity = total;

      setArrayShoppingCarts([
        ...arrayShoppingCarts,
        { ...arrayShoppingCarts[items], quantity: total },
      ]);
      const newarrayShoppingCarts = arrayShoppingCarts.filter(onlyUnique);
      setArrayShoppingCarts(newarrayShoppingCarts);
    }

    saveInLocalStorage(arrayShoppingCarts);
  };

  const updateAmoutCart = (id, total1) => {
    if (getItemsCart(id) === -1) return;
    else {
      arrayShoppingCarts[getItemsCart(id)].quantity = total1;

      setArrayShoppingCarts([
        ...arrayShoppingCarts,
        { ...arrayShoppingCarts[getItemsCart(id)], quantity: total1 },
      ]);
      const newarrayShoppingCarts = arrayShoppingCarts.filter(onlyUnique);
      setArrayShoppingCarts(newarrayShoppingCarts);
    }

    saveInLocalStorage(arrayShoppingCarts);
  };

  const increaseNumber = () => {
    textNumber.current.innerText = Number(textNumber.current.innerText) + 1;
    setQuantityProduct(textNumber.current.innerText);
  };

  const subtractNumber = () => {
    textNumber.current.innerText =
      textNumber.current.innerText === "1"
        ? (textNumber.current.innerText = "1")
        : Number(textNumber.current.innerText) - 1;
    setQuantityProduct(textNumber.current.innerText);
  };

  const saveInLocalStorage = (cart) => {
    localStorage.setItem("shoppingcart", JSON.stringify(cart));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        saveInCart,
        arrayShoppingCarts,
        textNumber,
        subtractNumber,
        increaseNumber,
        quantityProduct,
        quantityProductCart,
        setQuantityProductCart,
        handleDeleteProduct,
        limpiarCartBuy,
        updateAmoutCart,
        textNumbercart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
