import React from "react";
import { useNavigate } from "react-router";
import {
  CategoryBodyContainer,
  CategoryContainer,
  BackGroundImage,
} from "../styles/category/categories.styles";
// import "../styles/category/categories.styles.scss";
export default function Categories({ categories }) {
  const { id, imageUrl, title, route } = categories;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackGroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}
