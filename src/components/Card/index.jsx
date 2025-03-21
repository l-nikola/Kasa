function Card({ image, title }) {
  return (
    <figure className="card">
      <img src={image} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default Card;
