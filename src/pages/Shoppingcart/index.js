import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import CartItens from "../../components/CartItens";
import CartPriceTotal from "../../components/CartPriceTotal";
import { DataContext } from "../../Context/DataProvider";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const Shoppingcart = () => {
  const { arrayShoppingCarts, limpiarCartBuy } =
    useContext(ShoppingCartContext);
  const { dataProduct } = useContext(DataContext);
  const history = useNavigate();

  const handleNavigateHome = () => {
    history("/");
  };
  function cleanButton() {
    Swal.fire({
      title: "Desea limpiar  carro?",
      text: "esta accion no podra ser revertido!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Clean!",
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCartBuy();
        Swal.fire("Se ha Limpiado!", "0 Productos en carro", "success");
      }
    });
  }
  return (
    <div className="container mt-5 py-5">
      <div className="d-flex align-items-center ">
        <div>
          <h2 className="fw-normal mt-5">Carrito de Compras</h2>
          <h6 className="fw-normal text-secondary">
            Inicio/Carrito de Compras
          </h6>
        </div>
        <div className="mx-5 mt-5">
          {arrayShoppingCarts.length > 0 && (
            <button className="btn btn_add_car" onClick={cleanButton}>
              Limpiar
            </button>
          )}
        </div>
      </div>
      <div className="addCars">
        <div className="addCar_product p-3  ">
          {arrayShoppingCarts.length > 0 ? (
            arrayShoppingCarts.map((arrayShopping, index) => (
              <CartItens
                key={index}
                arrayShopping={arrayShopping}
                id={dataProduct.idPro}
              />
            ))
          ) : (
            <div className="d-flex flex-column align-items-center row">
              <h3 className="text-center fw-normal my-3">
                NO TIENES PRODUCTOS EN TU CARRITO
              </h3>
              <h4 className="text-center fw-light text-secondary">
                Encuentra los mejores productos, a los mejores precios
              </h4>
              <button
                className="btn btn_buy_now col-4 mt-5"
                onClick={handleNavigateHome}
              >
                Ir a Comprar
              </button>
            </div>
          )}
        </div>
        <div
          className="addCar_total card border-0  my-4"
          //   style="width: 18rem;"
        >
          <CartPriceTotal />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Shoppingcart;
