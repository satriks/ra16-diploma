import { useRef } from "react";
import logo from "./header-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../models/hook";
import { getSearchItems, setSearch } from "../../redux/StoreSlice";

type Props = {};

export default function Header({}: Props) {
  const searchForm = useRef<HTMLFormElement>(null);
  const cartList = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">
              <img src={logo} alt="Bosa Noga" />
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/catalog" className="nav-link">
                    Каталог
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    О магазине
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts" className="nav-link">
                    Контакты
                  </NavLink>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                    onClick={() => {
                      if (searchForm.current) {
                        const text = (searchForm.current as HTMLFormElement)
                          .querySelector("input")
                          ?.value.trim();
                        if (text) {
                          dispatch(setSearch(text));
                          dispatch(getSearchItems(text));
                          searchForm.current.reset();
                          navigate("/catalog");
                          return;
                        }
                        (
                          searchForm.current as HTMLFormElement
                        ).classList.toggle("invisible");
                        (searchForm.current as HTMLFormElement)
                          .querySelector("input")
                          ?.focus();
                      }
                    }}
                  ></div>
                  <NavLink to="/cart">
                    <div className="header-controls-pic header-controls-cart">
                      {cartList.length > 0 && (
                        <div className="header-controls-cart-full">
                          {cartList.length}
                        </div>
                      )}
                      <div className="header-controls-cart-menu"></div>
                    </div>
                  </NavLink>
                </div>
                <form
                  data-id="search-form"
                  className="header-controls-search-form form-inline invisible"
                  ref={searchForm}
                  onSubmit={(evt) => {
                    evt.preventDefault();
                  }}
                >
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
