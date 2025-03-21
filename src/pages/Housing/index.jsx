import React from "react";
import { useParams } from "react-router-dom";

function Housing() {
  const { id } = useParams();

  return (
    <main>
      <h1>Housing {id}</h1>
    </main>
  );
}

export default Housing;
