import { Routes, Route } from "react-router";
import Category from "../category/Category.component";
import "../../styles/shop/shop.styles.scss";

import CategoriesPreview from "../categories-preview/Categories.preview.component";
export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
}
