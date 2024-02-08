import { configureStore } from "@reduxjs/toolkit";
import StoreSlice from "./StoreSlice";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./mySaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: StoreSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
