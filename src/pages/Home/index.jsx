import Banner from "../../components/Banner";
import Card from "../../components/Card";

function Home() {
  return (
    <>
      {/* Ma première image avec texte */}
      <Banner
        image="public\Image source 1.svg"
        text="Chez vous, partout et ailleurs"
      />
      {/* Ma deuxième image sans texte */}
      {/* <Banner image="public\Image source 2.svg" /> */}

      <div className="cardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;
