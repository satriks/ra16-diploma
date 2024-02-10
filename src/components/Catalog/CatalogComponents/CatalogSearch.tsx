import { useAppDispatch, useAppSelector } from "../../../models/hook";
import { getSearchItems, setSearch } from "../../../redux/StoreSlice";

type Props = {};

export default function CatalogSearch({}: Props) {
  const dispatch = useAppDispatch();
  const searchText = useAppSelector((state) => state.searchText);
  return (
    <form
      className="catalog-search-form form-inline"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <input
        className="form-control"
        placeholder="Поиск"
        value={searchText}
        onChange={(evt) => {
          const text = evt.target.value;
          dispatch(setSearch(text));
          dispatch(getSearchItems(text));
        }}
      />
    </form>
  );
}