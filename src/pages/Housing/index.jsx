import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../../public/data/logement.json";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Profile from "../../components/Profile";
import Rating from "../../components/Rating";
import Error from "../Error";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <main className="housing">
      <Slideshow pictures={logement.pictures} />
      <section className="housing__content">
        <section className="housing__nameAndTags">
          <div>
            <h1>{logement.title}</h1>
            <span className="housing__location">{logement.location}</span>
          </div>
          <Tags tags={logement.tags} />
        </section>
        <section className="housing__profileAndRating">
          <Profile picture={logement.host.picture} name={logement.host.name} />
          <Rating rating={logement.rating} />
        </section>
      </section>
      <section className="housing__collapse">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}

export default Housing;
