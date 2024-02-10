import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataItem, Category } from "../models/models";

interface InitialState {
  topSales: DataItem[];
  categories: Category[];
  activeCategoryId: number;
  categoryItems: DataItem[];
  searchText: string;
  error: string | null;
  loading: {
    topSales: boolean;
    category: boolean;
    categoryItem: boolean;
    moreItem: boolean;
  };
  end: boolean;
}

const initialState: InitialState = {
  topSales: [],
  categories: [],
  categoryItems: [],
  activeCategoryId: 0,
  searchText: "",
  error: "",
  loading: {
    topSales: true,
    category: true,
    categoryItem: true,
    moreItem: false,
  },
  end: false,
};

const StoreSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    getTopSalesSuccess(state, action: PayloadAction<DataItem[]>) {
      state.loading.topSales = false;
      state.topSales = action.payload;
      state.error = null;
    },
    getCategoriesSuccess(state, action: PayloadAction<Category[]>) {
      state.loading.category = false;
      state.categories = [{ title: "Все", id: 0 }, ...action.payload];
      state.error = null;
    },
    getCategoryItemsSuccess(state, action: PayloadAction<DataItem[]>) {
      state.loading.categoryItem = false;
      state.categoryItems = action.payload;
      state.error = null;
    },
    getItemFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    getItemLoading(state) {
      state.loading.categoryItem = true;
      state.error = null;
      state.end = false;
    },
    getMoreItemLoading(state) {
      state.loading.moreItem = true;
      state.error = null;
    },
    getTopSaleLoading(state) {
      state.loading.topSales = true;
      state.error = null;
    },
    getCategoryLoading(state) {
      state.loading.category = true;
      state.error = null;
    },
    addMoreItems(state, action: PayloadAction<DataItem[]>) {
      state.categoryItems.push(...action.payload);
      state.loading.moreItem = false;
      state.error = null;
    },
    setPostEnd(state) {
      state.end = true;
    },
    setCategory(state, action: PayloadAction<number>) {
      state.activeCategoryId = action.payload;
    },

    setSearch(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
  },
});

export const GET_TOP_SALES = "store/getTopSales";
export const getTopSales = createAction(GET_TOP_SALES);
export const GET_CATEGORY = "store/getCategory";
export const getCategory = createAction(GET_CATEGORY);
export const GET_ITEMS = "store/getItems";
export const getItem = createAction<string>(GET_ITEMS);
export const GET_MORE_ITEMS = "store/getMoreItems";
export const getMoreItems = createAction<number>(GET_MORE_ITEMS);
export const GET_SEARCH = "store/getSearchItems";
export const getSearchItems = createAction<string>(GET_SEARCH);

export const {
  getTopSalesSuccess,
  getCategoriesSuccess,
  getCategoryItemsSuccess,
  getItemFailed,
  getItemLoading,
  setPostEnd,
  getTopSaleLoading,
  getCategoryLoading,
  getMoreItemLoading,
  setCategory,
  addMoreItems,
  setSearch,
} = StoreSlice.actions;

export default StoreSlice.reducer;
