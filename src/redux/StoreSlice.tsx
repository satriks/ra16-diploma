import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataItem, Category } from "../models/models";

interface InitialState {
  topSales: DataItem[];
  categories: Category[];
  categoryItems: DataItem[];
  error: string | null;
  topSalesLoading: boolean;
  loading: boolean;
  end: boolean;
}

const initialState: InitialState = {
  topSales: [],
  categories: [],
  categoryItems: [],
  error: "",
  loading: true,
  topSalesLoading: true,
  end: false,
};

const StoreSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    getTopSalesSuccess(state, action: PayloadAction<DataItem[]>) {
      state.topSalesLoading = false;
      state.topSales = action.payload;
      state.error = null;
    },
    getCategoriesSuccess(state, action: PayloadAction<Category[]>) {
      state.loading = false;
      state.categories = [{ title: "Все", id: "0" }, ...action.payload];
      state.error = null;
    },
    getItemFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    getItemLoading(state) {
      state.loading = true;
      state.error = null;
    },
    getTopSaleLoading(state) {
      state.topSalesLoading = true;
      state.error = null;
    },
    addMoreItems(state, action: PayloadAction<DataItem[]>) {
      state.categoryItems.push(...action.payload);
      state.loading = false;
      state.error = null;
    },
    getPostEnd(state) {
      state.end = true;
    },
  },
});

export const GET_TOP_SALES = "store/getTopSales";
export const getTopSales = createAction(GET_TOP_SALES);
export const GET_MORE_ITEMS = "store/getMoreItems";
export const getMoreItems = createAction<string>(GET_MORE_ITEMS);

export const {
  getTopSalesSuccess,
  getCategoriesSuccess,
  getItemFailed,
  getItemLoading,
  getPostEnd,
  getTopSaleLoading,
} = StoreSlice.actions;

export default StoreSlice.reducer;
