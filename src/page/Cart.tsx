import Banner from "../components/Banner";
import CartInfo from "../components/Cart/CartInfo";
import CartOrder from "../components/Cart/CartOrder";

export default function Cart() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <CartInfo />
          <CartOrder />
        </div>
      </div>
    </main>
  );
}
