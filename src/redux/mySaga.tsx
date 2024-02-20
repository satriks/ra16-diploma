import { createBrowserHistory } from "history";
import { delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_CATEGORY,
  GET_ITEMS,
  GET_ITEM_DETAIL,
  GET_MORE_ITEMS,
  GET_ORDER,
  GET_SEARCH,
  GET_TOP_SALES,
  addMoreItems,
  clearOrderSuccess,
  getCategoriesFailed,
  getCategoriesSuccess,
  getCategoryItemsSuccess,
  getCategoriesLoading,
  getDetailLoading,
  getItemDetailSuccess,
  getItemFailed,
  getItemLoading,
  getMoreItemLoading,
  getMoreItemsFailed,
  getOrderLoading,
  getOrderSuccess,
  getTopSaleLoading,
  getTopSalesFailed,
  getTopSalesSuccess,
  setCategory,
  setPostEnd,
} from "./StoreSlice";

import { DataItem, ItemDetail, OrderModel } from "../models/models";
import {
  getCategoriesApi,
  getItemCategoryApi,
  getItemDetailApi,
  getOrderApi,
  getTopSalesApi,
} from "../utils/api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export const browserHistory = createBrowserHistory();

export function* getOrderSaga(action: PayloadAction<OrderModel>) {
  yield put(getOrderLoading());

  try {
    const response: AxiosResponse = yield getOrderApi(action.payload);
    console.log(response);

    if (response.status > 200 && response.status < 300) {
      yield put(getOrderSuccess());
      yield delay(10000);
      yield put(clearOrderSuccess());
    }
  } catch (error) {
    yield put(
      getItemFailed({ message: (error as Error).message, errFunc: action })
    );
  }
}

export function* getItemDetailSaga(action: PayloadAction<string | number>) {
  yield put(getDetailLoading());

  try {
    const payload: ItemDetail = yield getItemDetailApi(action.payload);

    yield put(getItemDetailSuccess(payload));
  } catch (e) {
    const error = e as AxiosError;

    if (error.response?.status === 404) {
      browserHistory.push("/*");
    }
    yield put(
      getItemFailed({ message: (e as Error).message, errFunc: action })
    );
  }
}

export function* getSearchSaga(action: PayloadAction<string>) {
  yield put(getItemLoading());
  const categoryId: number = yield select((state) => state.activeCategoryId);

  try {
    const payload: DataItem[] = yield getItemCategoryApi(
      categoryId,
      0,
      action.payload
    );

    yield put(getCategoryItemsSuccess(payload));
  } catch (error) {
    yield put(
      getItemFailed({ message: (error as Error).message, errFunc: action })
    );
  }
}

export function* getMoreItemsSaga(action: PayloadAction<string>) {
  yield put(getMoreItemLoading());
  const itemsList: DataItem[] = yield select((state) => state.categoryItems);
  const searchText: string = yield select((state) => state.searchText);

  try {
    const payload: DataItem[] = yield getItemCategoryApi(
      action.payload,
      itemsList.length,
      searchText
    );
    if (payload.length < 6) yield put(setPostEnd());

    yield put(addMoreItems(payload));
  } catch (error) {
    yield put(
      getMoreItemsFailed({ message: (error as Error).message, errFunc: action })
    );
  }
}

export function* getItemsSaga(action: PayloadAction<string>) {
  yield put(getItemLoading());
  const searchText: string = yield select((state) => state.searchText);

  try {
    const payload: DataItem[] = yield getItemCategoryApi(
      action.payload,
      0,
      searchText
    );
    yield put(getCategoryItemsSuccess(payload));
  } catch (error) {
    yield put(
      getItemFailed({ message: (error as Error).message, errFunc: action })
    );
  }
}

export function* getCategorySaga(action: PayloadAction<string>) {
  yield put(getCategoriesLoading());

  try {
    const payload: DataItem[] = yield getCategoriesApi();
    yield put(getCategoriesSuccess(payload));
  } catch (error) {
    yield put(
      getCategoriesFailed({
        message: (error as Error).message,
        errFunc: action,
      })
    );
  }
}

export function* getTopSaleSaga(action: PayloadAction<string>) {
  yield put(getTopSaleLoading());
  try {
    const payload: DataItem[] = yield getTopSalesApi();
    yield put(getTopSalesSuccess(payload));
  } catch (error) {
    yield put(
      getTopSalesFailed({ message: (error as Error).message, errFunc: action })
    );
  }
}

export function* sagas() {
  yield takeEvery(GET_TOP_SALES, getTopSaleSaga);
  yield takeEvery(GET_CATEGORY, getCategorySaga);
  yield takeEvery(GET_ITEMS, getItemsSaga);
  yield takeEvery(GET_MORE_ITEMS, getMoreItemsSaga);
  yield takeEvery(setCategory.type, getItemsSaga);
  yield takeLatest(GET_SEARCH, getSearchSaga);
  yield takeLatest(GET_ITEM_DETAIL, getItemDetailSaga);
  yield takeLatest(GET_ORDER, getOrderSaga);
}
