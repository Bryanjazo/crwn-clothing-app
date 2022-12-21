import { useSelector } from "react-redux";

import CategoryPreview from "../../category-preview/Category-preview.component";
export default function CategoriesPreview() {
  const { categoriesMap } = useSelector((state) => state.category);

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
