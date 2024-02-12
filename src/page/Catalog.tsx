import CatalogMenu from "../components/Catalog/CatalogComponents/CatalogMenu";
import CatalogAddMore from "../components/Catalog/CatalogComponents/CatalogAddMore";
import CatalogBody from "../components/Catalog/CatalogComponents/CatalogBody";
import CatalogSearch from "../components/Catalog/CatalogComponents/CatalogSearch";
import Banner from "../components/Banner";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../models/hook";
import { getCategory, getItem } from "../redux/StoreSlice";

export default function Catalog() {
  const isLoading = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getItem("0"));
  }, [dispatch]);

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <h2 className="text-center">Каталог</h2>
          <CatalogSearch />
          <CatalogMenu />
          <CatalogBody />
          {!isLoading.categoryItem && <CatalogAddMore />}
        </div>
      </div>
    </main>
  );
}
