import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logements from "../../../public/logement.json";

function Home() {
  return (
    <>
      <Banner
        image="public\Image source 1.svg"
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
    </>
  );
}

export default Home;
