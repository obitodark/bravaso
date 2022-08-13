import ProductNotFound from "../ProductNotFound";
import Products from "../Products";

const CardProducts = ({ filterProduct }) => {
  return (
    <div className="container_box_Product">
      {filterProduct.length === 0 ? (
        <ProductNotFound />
      ) : (
        <Products filterProduct={filterProduct} />
      )}
    </div>
  );
};

export default CardProducts;
