import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
const initialState = {
  categoriesMap: {},
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",

  async () => {
    const response = getCategoriesAndDocuments("categories");

    return response;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoriesMap: async (state, action) => {
      state.categoriesMap = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCategories.fulfilled, (state, action) => {
      // Add user to the state array

      state.categoriesMap = action.payload;
    });
  },
});

export const { setCategoriesMap } = categorySlice.actions;

export default categorySlice.reducer;
