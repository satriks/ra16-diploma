import { useNavigate, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { useAppDispatch, useAppSelector } from "../models/hook";
import { MouseEvent, useEffect, useState } from "react";
import { addCart, getItemDetail } from "../redux/StoreSlice";
import Loader from "../components/Loader";
import ErrorInfo from "../components/ErrorInfo";

export default function Product() {
  const { id } = useParams();
  const itemDetail = useAppSelector((state) => state.currentProduct);
  const isLoading = useAppSelector((state) => state.loading.itemDetail);
  const isError = useAppSelector((state) => state.error.other);
  const dispatch = useAppDispatch();
  const [selectedSize, setSize] = useState<string | null>(null);
  const [selectedCount, setCount] = useState<number>(1);
  const navigate = useNavigate();
  const hasAvailableSize = itemDetail?.sizes.filter(
    (size) => size.available === true
  );

  const chooseSize = (evt: MouseEvent) => {
    const target = evt.target as HTMLSpanElement;
    target.classList.toggle("selected");
    setSize(target.textContent);
    if (!target.classList.contains("selected")) {
      setSize(null);
    }
  };

  const addToCart = () => {
    if (itemDetail && selectedCount && selectedSize) {
      const item = {
        id: itemDetail.id,
        title: itemDetail.title,
        size: selectedSize,
        price: itemDetail.price,
        count: selectedCount,
      };
      dispatch(addCart(item));
      navigate("/cart");
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getItemDetail(id));
    }
  }, [dispatch, id]);
  if (isError || isLoading) {
    return (
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner />
            <div className="catalog-spaces">
              {isError && <ErrorInfo errorInfo={isError} />}
              {!isError && isLoading && <Loader />}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />

          <section className="catalog-item">
            <h2 className="text-center">{itemDetail?.title}</h2>
            <div className="row">
              <div className="col-5">
                <img src={itemDetail?.images[0]} className="img-fluid" alt="" />
              </div>
              <div className="col-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{itemDetail?.sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{itemDetail?.manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{itemDetail?.color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{itemDetail?.material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{itemDetail?.season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{itemDetail?.reason}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center">
                  <p>
                    Размеры в наличии:{" "}
                    {itemDetail?.sizes.map((size) => {
                      if (size.available)
                        return (
                          <span
                            className={
                              size.size === selectedSize
                                ? "catalog-item-size selected"
                                : "catalog-item-size"
                            }
                            key={itemDetail.id + size.size}
                            onClick={chooseSize}
                          >
                            {size.size}
                          </span>
                        );
                    })}
                  </p>
                  {hasAvailableSize && hasAvailableSize?.length > 0 && (
                    <p>
                      Количество:{" "}
                      <span className="btn-group btn-group-sm pl-2">
                        <button
                          className={
                            selectedCount > 1 && selectedSize
                              ? "btn btn-secondary"
                              : "btn btn-secondary disabled"
                          }
                          onClick={() => {
                            setCount(selectedCount - 1);
                          }}
                        >
                          -
                        </button>
                        <span className="btn btn-outline-primary">
                          {selectedCount}
                        </span>
                        <button
                          className={
                            selectedCount < 10 && selectedSize
                              ? "btn btn-secondary"
                              : "btn btn-secondary disabled"
                          }
                          onClick={() => {
                            setCount(selectedCount + 1);
                          }}
                        >
                          +
                        </button>
                      </span>
                    </p>
                  )}
                </div>
                {hasAvailableSize && hasAvailableSize?.length > 0 && (
                  <button
                    className={
                      selectedSize
                        ? "btn btn-danger btn-block btn-lg"
                        : "btn btn-danger btn-block btn-lg disabled"
                    }
                    onClick={addToCart}
                  >
                    В корзину
                  </button>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
