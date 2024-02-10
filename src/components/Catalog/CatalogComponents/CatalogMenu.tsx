import { useAppDispatch, useAppSelector } from "../../../models/hook";
import CatalogMenuItem from "./CatalogMenuItem";

type Props = {};

export default function CatalogMenu({}: Props) {
  const categories = useAppSelector((state) => state.categories);

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories.map((category) => (
        <CatalogMenuItem category={category} key={category.id} />
      ))}
    </ul>
  );
}
