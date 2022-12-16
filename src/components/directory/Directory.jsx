import React from "react";
import Categories from "../categories/Categories";
import { Link } from "react-router-dom";
import { DirectoryContainer } from "../styles/directory/directory.styles";
export default function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <Categories key={category.id} categories={category} />
      ))}
    </DirectoryContainer>
  );
}
