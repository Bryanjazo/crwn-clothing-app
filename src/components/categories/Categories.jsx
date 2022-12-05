import React from "react";
import "../styles/category/categories.styles.scss";
export default function Categories({ categories }) {
  const { id, imageUrl, title } = categories;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
