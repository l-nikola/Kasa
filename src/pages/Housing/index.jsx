import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../../public/data/logement.json";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  return (
    <main className="housing">
      <Slideshow pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      {/* // Avatar components // */}
      <span>{logement.location}</span>
      {/* // Tags components //  */}
      {/* // Rating components // */}
      <section className="housing__collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>

      <br />
    </main>
  );
}

export default Housing;
