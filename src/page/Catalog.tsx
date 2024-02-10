import CatalogMenu from "../components/Catalog/CatalogComponents/CatalogMenu";
import CatalogAddMore from "../components/Catalog/CatalogComponents/CatalogAddMore";
import CatalogBody from "../components/Catalog/CatalogComponents/CatalogBody";
import CatalogSearch from "../components/Catalog/CatalogComponents/CatalogSearch";
import Banner from "../components/Banner";
import { useEffect } from "react";
import { useAppDispatch } from "../models/hook";
import { getCategory, getItem } from "../redux/StoreSlice";

type Props = {};

export default function Catalog({}: Props) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getItem("0"));
  }, []);

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <h2 className="text-center">Каталог</h2>
          <CatalogSearch />
          <CatalogMenu />
          <CatalogBody />
          <CatalogAddMore />
        </div>
      </div>
    </main>
  );
}
