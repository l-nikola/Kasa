function Card({ image, title }) {
  return (
    <section className="card">
      <img src={image} alt={title} className="card-image" />
      <p>{title}</p>
    </section>
  );
}

export default Card;
