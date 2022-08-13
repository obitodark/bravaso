import { useContext, useRef } from "react";

import { ShoppingCartContext } from "../../Context";
import { motion } from "framer-motion";

const CartItens = ({ arrayShopping }) => {
  const { handleDeleteProduct, updateAmoutCart } =
    useContext(ShoppingCartContext);

  const textNumbercart = useRef();

  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }

  const increaseNumber = (e) => {
    if (textNumbercart.current.innerText > 9) return;
    textNumbercart.current.innerText =
      Number(textNumbercart.current.innerText) + 1;
    const id = e.target.className.replace("-numbermax", "");

    updateAmoutCart(Number(id), textNumbercart.current.innerText);
  };

  const subtractNumber = (e) => {
    if (textNumbercart.current.innerText < 2) return;
    textNumbercart.current.innerText =
      Number(textNumbercart.current.innerText) - 1;

    const id = e.target.className.replace("-numbermin", "");
    updateAmoutCart(Number(id), textNumbercart.current.innerText);
  };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.7 }}
      id=""
      className="carBuyData my-3 p-2 w-100 d-flex justify-content-between"
    >
      <div className="d-flex   ">
        <div className="">
          <img
            width="150px"
            height="150px"
            src={arrayShopping.CartShopping.image[0]}
            alt=""
          />
        </div>
        <div className="mx-3 d-flex flex-column justify-content-center">
          <h5 className="text-secondary fw-light">
            {arrayShopping.CartShopping.brand}
          </h5>
          <h5 className="fw-normal">{arrayShopping.CartShopping.name}</h5>
          <h6 className="text-secondary">
            Talla :{arrayShopping.CartShopping.size}
          </h6>
          <h5 className="fw-normal">
            {" "}
            {arrayShopping.CartShopping.discount === 0
              ? "S/" + arrayShopping.CartShopping.price_off
              : "S/" +
                createDescont(
                  arrayShopping.CartShopping.price_off,
                  arrayShopping.CartShopping.discount
                )}
            <del className="text-secondary mx-2">
              {arrayShopping.CartShopping.discount === 0
                ? ""
                : "$" + arrayShopping.CartShopping.price_off}
            </del>
          </h5>
        </div>
      </div>

      <div className="  d-flex flex-column justify-content-around align-items-end">
        <div className="d-flex">
          <a>Guardar para despues</a>
          <button
            className="btn btn-secundary border border-dark p-1 mx-2"
            onClick={() =>
              handleDeleteProduct(
                arrayShopping.CartShopping.id,
                arrayShopping.CartShopping.name
              )
            }
          >
            <i className="bi bi-trash mx-2"></i>
          </button>
        </div>

        {/* <Counter /> */}
        <div className="container_input_number">
          <span
            id="input_mim"
            className={`${arrayShopping.CartShopping.id + "-numbermin"}`}
            onClick={subtractNumber}
          >
            -
          </span>
          <span className="${" id="input_number" ref={textNumbercart}>
            {arrayShopping.quantity}
          </span>
          <span
            id={"input_max"}
            className={`${arrayShopping.CartShopping.id + "-numbermax"}`}
            onClick={increaseNumber}
          >
            +
          </span>
        </div>
      </div>
    </motion.div>
  );
};
export default CartItens;
