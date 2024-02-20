import Card from "../../Card/Card";
import { useAppSelector } from "../../../models/hook";
import Loader from "../../Loader";
import ErrorInfo from "../../ErrorInfo";

export default function CatalogBody() {
  const items = useAppSelector((state) => state.categoryItems);
  const isLoading = useAppSelector((state) => state.loading.categoryItem);
  const isError = useAppSelector((state) => state.error.other);

  if (isError) return <ErrorInfo errorInfo={isError} />;
  if (isLoading) return <Loader />;
  if (!items.length)
    return (
      <div className="items_not_found">
        Товаров с таким названием нет, попробуйте изменить поиск{" "}
      </div>
    );

  return (
    <div className="row">
      {items.map((item) => (
        <Card item={item} key={item.id + item.title} />
      ))}
    </div>
  );
}
