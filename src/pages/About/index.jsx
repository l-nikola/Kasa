import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import CollapseData from "../../../public/data/collapses.json";

function About() {
  return (
    <main>
      <Banner image="public/image/Image source 2.svg" />
      <section className="collapseContainer">
        {CollapseData.map((data) => {
          return (
            <div key={data.id}>
              <Collapse title={data.title} content={data.content} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default About;
