import React from "react";
import { useParams } from "react-router-dom";

function Housing() {
  const { id } = useParams();

  return (
    <>
      <h1>Housing {id}</h1>
    </>
  );
}

export default Housing;
