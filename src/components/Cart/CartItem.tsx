import { Link } from "react-router-dom";
import { CartItemModel } from "../../models/models";
import { useAppDispatch } from "../../models/hook";
import { delCart } from "../../redux/StoreSlice";

type Props = { item: CartItemModel };

export default function CartItem({ item }: Props) {
  const dispatch = useAppDispatch();

  console.log(item);

  return (
    <tr>
      <td scope="row">1</td>
      <td>
        <Link to={`/catalog/${item.id}`}>{item.title}</Link>
      </td>
      <td>{item.size}</td>
      <td>{item.count}</td>
      <td>{item.price} руб.</td>
      <td>{item.price * item.count} руб.</td>
      <td>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => dispatch(delCart(item))}
        >
          Удалить
        </button>
      </td>
    </tr>
  );
}
