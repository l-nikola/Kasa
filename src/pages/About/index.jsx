import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import CollapseData from "../../../public/collapses.json";

function About() {
  return (
    <div>
      <Banner image="public\Image source 2.svg" />
      <section className="collapseContainer">
        {CollapseData.map((data) => {
          return (
            <div key={data.id}>
              <Collapse text={data.title} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default About;
