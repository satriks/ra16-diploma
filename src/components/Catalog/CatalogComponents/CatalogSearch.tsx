import { useAppDispatch, useAppSelector } from "../../../models/hook";
import { getSearchItems, setSearch } from "../../../redux/StoreSlice";

export default function CatalogSearch() {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.searchText);

  return (
    <form
      className="catalog-search-form form-inline"
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch(getSearchItems(searchText));
      }}
    >
      <input
        className="form-control"
        placeholder="Поиск"
        value={searchText}
        onChange={(evt) => {
          const text = evt.target.value;
          dispatch(setSearch(text));
        }}
      />
    </form>
  );
}
