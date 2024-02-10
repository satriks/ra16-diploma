import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./page/Catalog";
import About from "./page/About";
import Product from "./page/Product";
import Cart from "./page/Cart";
import Contacts from "./page/Contacts";
import ErrorPage from "./page/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
