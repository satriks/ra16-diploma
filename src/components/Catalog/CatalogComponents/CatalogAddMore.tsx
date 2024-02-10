import { useAppDispatch, useAppSelector } from "../../../models/hook";
import { getMoreItems } from "../../../redux/StoreSlice";
import Loader from "../../Loader";

export default function CatalogAddMore() {
  const currentId = useAppSelector((state) => state.activeCategoryId);
  const available = useAppSelector((state) => state.end);
  const isLoading = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  if (isLoading.moreItem) return <Loader />;
  if (available) return null;

  return (
    <div className="text-center">
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          dispatch(getMoreItems(currentId));
        }}
      >
        Загрузить ещё
      </button>
    </div>
  );
}
