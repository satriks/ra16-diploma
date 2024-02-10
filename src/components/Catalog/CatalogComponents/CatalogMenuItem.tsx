import { Link } from "react-router-dom";
import { Category } from "../../../models/models";
import { useAppDispatch, useAppSelector } from "../../../models/hook";
import { setCategory } from "../../../redux/StoreSlice";

type Props = { category: Category };

export default function CatalogMenuItem({ category }: Props) {
  const currentId = useAppSelector((state) => state.activeCategoryId);
  const dispatch = useAppDispatch();

  const active = category.id === currentId ? "nav-link active" : "nav-link";

  return (
    <li className="nav-item">
      <Link
        className={active}
        to="#catalog"
        onClick={() => {
          dispatch(setCategory(category.id));
        }}
      >
        {category.title}
      </Link>
    </li>
  );
}
