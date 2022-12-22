import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../features/categories/categories.selector";
import CategoryPreview from "../../category-preview/Category-preview.component";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

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
