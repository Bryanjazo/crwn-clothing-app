import { createSelector } from "reselect";

const selectCategories = (state) => state.category;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.categoriesMap.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
