import { useEffect } from "react";
import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import { getTopSales } from "../../redux/StoreSlice";
import Loader from "../Loader";

type Props = {};

export default function Hits({}: Props) {
  const dispatch = useAppDispatch();
  const isLoader = useAppSelector((state) => state.topSalesLoading);
  const hits = useAppSelector((state) => state.topSales);

  useEffect(() => {
    dispatch(getTopSales());
  }, []);
  if (isLoader)
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <Loader />
      </section>
    );

  if (hits.length > 0) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          {hits && hits.map((card) => <Card item={card} key={card.id} />)}
        </div>
      </section>
    );
  }
}
