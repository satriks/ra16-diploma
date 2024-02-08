import CatalogMenu from "./CatalogComponents/CatalogMenu";
import CatalogBody from "./CatalogComponents/CatalogBody";
import CatalogAddMore from "./CatalogComponents/CatalogAddMore";
import { useAppSelector } from "../../../models/hook";
import Loader from "../../Loader";

type Props = {};

export default function CatalogMain({}: Props) {
  const isLoader = useAppSelector((state) => state.loading);

  if (isLoader)
    return (
      <section className="top-sales">
        <h2 className="text-center">Каталог</h2>
        <Loader />
      </section>
    );

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogMenu />
      <CatalogBody />
      <CatalogAddMore />
    </section>
  );
}
