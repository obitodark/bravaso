import { useState, useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import Counter from "../Counter";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { motion } from "framer-motion";
const DetailsProductData = () => {
  const { dataProduct, arrayproducts } = useContext(DataContext);
  const { saveInCart } = useContext(ShoppingCartContext);

  const { textNumber, increaseNumber, subtractNumber } =
    useContext(ShoppingCartContext);
  const history = useNavigate();
  let da = [];
  const [Productos, setProductos] = useState(
    arrayproducts.find((arrayproduct) => arrayproduct.id === dataProduct.idPro)
  );
  function createStars(number) {
    da = [];
    for (let i = 0; i < number; i++) {
      da.push(i);
    }
  }
  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }

  const handleAddCart = () => {
    saveInCart(Productos, 1, dataProduct.idPro);
  };
  const handleOncClickCartBuy = () => {
    history("/shoppingcart");
  };

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="datos_details">
        <div className=" d-flex my-1">
          <h5 className="text-secondary mx-1 text-uppercase">
            {Productos.brand}
          </h5>
        </div>

        <div className="py-2">
          <h2 className="text-capitalize">{String(Productos.name)}</h2>
          {createStars(Productos.stars)}
          {da.map((data, index) => (
            <i key={index} className="bi bi-star-fill text-danger mx-1 "></i>
          ))}
        </div>

        <h6
          className={`badge  bg-danger
        ${Productos.discount === "" ? "p-0" : "py-3 px-2 "}`}
        >
          {Productos.discount === 0 ? "" : Productos.discount + "% DCTO"}
        </h6>

        <div className="row d-flex">
          <h5>
            Stock :
            <span className="text-secondary mx-1">{Productos.stock}</span>
          </h5>

          <div className="detailsProductAmount">
            <h6 className="text-secondary">Cantidad :</h6>

            <div className="mx-3">
              <Counter
                textNumber={textNumber}
                increaseNumber={increaseNumber}
                subtractNumber={increaseNumber}
              />
            </div>
          </div>

          {/* <div className="mt-3">
            <h5>Tallas</h5>
            <div>//</div>
          </div> */}

          <div className="mt-3">
            <h4 className="text-danger">
              {"S/" + createDescont(Productos.price_off, Productos.discount)}
              (Oferta)
              <del className="text-secondary mx-3">
                {Productos.discount === 0 ? "" : "S/" + Productos.price_off}
              </del>
            </h4>
          </div>
        </div>

        <div className="row d-flex justify-content-around mt-4">
          <input
            className=" btn btn_add_car col-5"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            type="button"
            value="Add car"
            onClick={handleAddCart}
          />
          <input
            className="btn btn_buy_now col-5"
            type="button"
            value="Buy now"
            onClick={handleOncClickCartBuy}
          />
        </div>
      </div>
    </motion.div>
  );
};
export default DetailsProductData;
