import { PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "../models/hook";
import { OrderModel } from "../models/models";

type Props = {
  errorInfo: {
    message: string;
    errFunc: PayloadAction<string | number | OrderModel>;
  } | null;
};

export default function ErrorInfo({ errorInfo }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="error-message__wrapper">
      <div className="error-message">
        <h2>{errorInfo?.message}</h2>
        <button
          onClick={() => {
            if (errorInfo) {
              dispatch(errorInfo.errFunc);
            }
          }}
        >
          Попробовать еще
        </button>
      </div>
    </div>
  );
}
