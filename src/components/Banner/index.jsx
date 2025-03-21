function Banner({ image, text }) {
  return (
    <figure className={`banner ${text ? "banner__text" : ""}`}>
      <img src={image} alt={text} />
      <figcaption>{text}</figcaption>
    </figure>
  );
}

export default Banner;
