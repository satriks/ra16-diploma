import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  GET_TOP_SALES,
  getItemFailed,
  getItemLoading,
  getTopSaleLoading,
  getTopSalesSuccess,
} from "./StoreSlice";

import { DataItem } from "../models/models";
import { getTopSalesApi } from "../utils/api";

// export function* getMorePostSaga(action: PayloadAction<string>) {
//   let ok = false;

//   yield put(getPostLoading());
//   while (!ok) {
//     try {
//       const payload: DataItem[] = yield getMorePostApi(action.payload);
//       ok = true;
//       if (payload.length < 5) {
//         yield put(getPostEnd());
//       }
//       yield put(addMorePosts(payload));
//     } catch (error) {
//       yield put(getPostFailed((error as Error).message));
//     }
//     sleep(3000);
//   }
// }

export function* getTopSaleSaga() {
  yield put(getTopSaleLoading());

  try {
    const payload: DataItem[] = yield getTopSalesApi();
    yield put(getTopSalesSuccess(payload));
  } catch (error) {
    yield put(getItemFailed((error as Error).message));
  }
}

export function* sagas() {
  yield takeEvery(GET_TOP_SALES, getTopSaleSaga);
  // yield takeLatest(GET_MORE_POSTS, getMorePostSaga);
}
