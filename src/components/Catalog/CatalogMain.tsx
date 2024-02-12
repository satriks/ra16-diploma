import CatalogMenu from "./CatalogComponents/CatalogMenu";
import CatalogAddMore from "./CatalogComponents/CatalogAddMore";
import { useAppDispatch } from "../../models/hook";
import { useEffect } from "react";
import { getCategory, getItem } from "../../redux/StoreSlice";
import CatalogBody from "./CatalogComponents/CatalogBody";

export default function CatalogMain() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getItem("0"));
  }, [dispatch]);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogMenu />
      <CatalogBody />
      <CatalogAddMore />
    </section>
  );
}
