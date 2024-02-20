import CatalogMenu from "./CatalogComponents/CatalogMenu";
import CatalogAddMore from "./CatalogComponents/CatalogAddMore";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import { useEffect } from "react";
import { getCategory, getItem } from "../../redux/StoreSlice";
import CatalogBody from "./CatalogComponents/CatalogBody";

export default function CatalogMain() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading.categoryItem);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getItem("0"));
  }, [dispatch]);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogMenu />
      <CatalogBody />
      {!isLoading && <CatalogAddMore />}
    </section>
  );
}
