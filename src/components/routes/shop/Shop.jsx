import { Routes, Route } from "react-router";
import { useEffect } from "react";
import Category from "../category/Category.component";
import "../../styles/shop/shop.styles.scss";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../features/categories/categoriesSlice";
import CategoriesPreview from "../categories-preview/Categories.preview.component";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
}
