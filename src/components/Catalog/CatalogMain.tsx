import CatalogMenu from "./CatalogComponents/CatalogMenu";
import CatalogAddMore from "./CatalogComponents/CatalogAddMore";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import Loader from "../Loader";
import { useEffect } from "react";
import { getCategory, getItem } from "../../redux/StoreSlice";
import CatalogBody from "./CatalogComponents/CatalogBody";

type Props = {};

export default function CatalogMain({}: Props) {
  const isLoading = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getItem("0"));
  }, []);

  // if (isLoading.categoryItem || isLoading.categories)
  //   return (
  //     <section className="catalog" id="catalog">
  //       <h2 className="text-center">Каталог</h2>
  //       <Loader />
  //     </section>
  //   );

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogMenu />
      <CatalogBody />
      <CatalogAddMore />
    </section>
  );
}
