import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../../public/data/logement.json";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Profile from "../../components/Profile";
import Rating from "../../components/Rating";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  return (
    <main className="housing">
      <Slideshow pictures={logement.pictures} />
      <section className="housing__header">
        <div>
          <h1>{logement.title}</h1>
          <span className="housing__location">{logement.location}</span>
        </div>
        <Profile picture={logement.host.picture} name={logement.host.name} />
      </section>
      <section className="housing__tagsAndRating">
        <Tags tags={logement.tags} />
        <Rating rating={logement.rating} />
      </section>
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
    </main>
  );
}

export default Housing;
