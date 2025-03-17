import Banner from "../../components/Banner";

function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* Ma première image avec texte */}
      <Banner
        image="public\Image source 1.svg"
        text="Chez vous, partout et ailleurs"
      />
      {/* Ma deuxième image sans texte */}
      <Banner image="public\Image source 2.svg" />
    </>
  );
}

export default Home;
