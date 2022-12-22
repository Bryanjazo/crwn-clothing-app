import { Routes, Route } from "react-router";
import { useEffect } from "react";
import Category from "../category/Category.component";
import "../../styles/shop/shop.styles.scss";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/Categories.preview.component";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../../features/categories/categoriesSlice";
export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments("categories");

      dispatch(setCategoriesMap(categories));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
}
