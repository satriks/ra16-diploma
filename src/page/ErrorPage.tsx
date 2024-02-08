import Banner from "../components/Banner";

type Props = {};

export default function ErrorPage({}: Props) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <section className="top-sales">
            <h2 className="text-center">Страница не найдена</h2>
            <p>Извините, такая страница не найдена!</p>
          </section>
        </div>
      </div>
    </main>
  );
}
