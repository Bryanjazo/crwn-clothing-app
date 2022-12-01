import React from "react";
import Categories from "../categories/Categories";
export default function Directory({ categories }) {
  return (
    <div className="categories-container">
      <div className="categories-container">
        {categories.map((category) => (
          <Categories key={category.id} categories={category} />
        ))}
      </div>
    </div>
  );
}
