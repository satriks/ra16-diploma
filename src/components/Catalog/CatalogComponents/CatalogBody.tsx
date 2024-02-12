import Card from "../../Card/Card";
import { useAppSelector } from "../../../models/hook";
import Loader from "../../Loader";
import ErrorInfo from "../../ErrorInfo";

type Props = {};

export default function CatalogBody({}: Props) {
  const items = useAppSelector((state) => state.categoryItems);
  const isLoading = useAppSelector((state) => state.loading.categoryItem);
  const isError = useAppSelector((state) => state.error.other);

  if (isError) return <ErrorInfo text={isError} />;
  if (isLoading) return <Loader />;

  return (
    <div className="row">
      {items.map((item) => (
        <Card item={item} key={item.id + item.title} />
      ))}
    </div>
  );
}
