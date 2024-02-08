import { useRef } from "react";
import logo from "./header-logo.png";
import { NavLink } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  const searchForm = useRef<HTMLFormElement>(null);
  //   const searchEl = useRef(null);
  //   const searchFormEl = useRef(null);
  //   // const searchEl = document.querySelector("[data-id=search-expander]");
  //   // const searchFormEl = document.querySelector("[data-id=search-form]");
  //   console.log(searchEl);

  //   if (searchEl.current != null) {
  //     searchEl.current.addEventListener("click", () => {
  //       console.log(42);

  //       searchFormEl.current.classList.toggle("invisible");
  //       searchFormEl.current.querySelector("input").focus();
  //     });
  //   }

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
                        (
                          searchForm.current as HTMLFormElement
                        ).classList.toggle("invisible");
                        (searchForm.current as HTMLFormElement)
                          .querySelector("input")
                          ?.focus();
                      }
                    }}
                  ></div>
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <NavLink to="/cart">
                    <div className="header-controls-pic header-controls-cart">
                      <div className="header-controls-cart-full">1</div>
                      <div className="header-controls-cart-menu"></div>
                    </div>
                  </NavLink>
                </div>
                <form
                  data-id="search-form"
                  className="header-controls-search-form form-inline invisible"
                  ref={searchForm}
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
