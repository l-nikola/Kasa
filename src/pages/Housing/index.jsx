import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import logements from "../../../public/data/logement.json";

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  return (
    <main>
      <Slideshow pictures={logement.pictures} />
    </main>
  );
}

export default Housing;
