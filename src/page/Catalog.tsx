import CatalogMenu from "../components/assets/Catalog/CatalogComponents/CatalogMenu";
import CatalogAddMore from "../components/assets/Catalog/CatalogComponents/CatalogAddMore";
import CatalogBody from "../components/assets/Catalog/CatalogComponents/CatalogBody";
import CatalogSearch from "../components/assets/Catalog/CatalogComponents/CatalogSearch";

type Props = {};

export default function Catalog({}: Props) {
  // const items = [1, 2, 3, 4, 5, 6];

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogSearch />
      <CatalogMenu />
      <CatalogBody />
      <CatalogAddMore />
    </section>
  );
}
