import { useContext } from "react";

import { CatergoriesContext } from "../../../context/CategoriesContext";

import CategoryPreview from "../../category-preview/Category-preview.component";
export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CatergoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
