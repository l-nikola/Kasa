import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../../public/data/logement.json";

function Home() {
  return (
    <main>
      <Banner
        image="public/image/Image source 1.svg"
        text="Chez vous, partout et ailleurs"
      />

      <div className="cardContainer">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            image={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
