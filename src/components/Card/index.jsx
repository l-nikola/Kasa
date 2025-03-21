import { Link } from "react-router-dom";

function Card({ id, image, title }) {
  return (
    <Link to={`/housing/${id}`}>
      <figure className="card">
        <img src={image} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  );
}

export default Card;
