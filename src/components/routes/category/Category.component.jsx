import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import ProductCard from "../../product-card/ProductCard";
import "../../styles/routes-category/category.styles.scss";
export default function Category() {
  const { categoriesMap } = useSelector((state) => state.category);
  const { category } = useParams();

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      {" "}
      <h2 className="routes-category-title">{category}</h2>
      <div className="route-category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
