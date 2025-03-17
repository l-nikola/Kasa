import Banner from "../../components/Banner";
import Card from "../../components/Card";

function Home() {
  return (
    <>
      <Banner
        image="public\Image source 1.svg"
        text="Chez vous, partout et ailleurs"
      />

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
