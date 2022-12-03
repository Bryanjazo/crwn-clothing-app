import { useContext } from "react";

import { ProductContext } from "../../../context/ProductContext";
import ProductCard from "../../product-card/ProductCard";
import "../../styles/shop/shop.styles.scss";
export default function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <div className="prodcts-contaier">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
