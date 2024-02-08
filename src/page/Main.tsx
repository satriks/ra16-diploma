import Banner from "../components/Banner";
import CatalogMain from "../components/assets/Catalog/CatalogMain";

import Hits from "../components/Hits/Hits";
import Catalog from "./Catalog";

export default function Main() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <Hits />
          <CatalogMain />
        </div>
      </div>
    </main>
  );
}
