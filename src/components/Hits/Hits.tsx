import { useEffect } from "react";
import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import { getTopSales } from "../../redux/StoreSlice";
import Loader from "../Loader";
import ErrorInfo from "../ErrorInfo";

export default function Hits() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.loading);
  const isError = useAppSelector((state) => state.error.topSales);
  const hits = useAppSelector((state) => state.topSales);

  useEffect(() => {
    dispatch(getTopSales());
  }, [dispatch]);

  if (isError) {
    return (
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <ErrorInfo text={isError} />
      </section>
    );
  }

  if (isLoading.topSales)
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
