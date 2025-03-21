function Banner({ image, text }) {
  const brightnessClass = text ? "banner__text" : "";
  return (
    <figure className={`banner ${brightnessClass}`}>
      <img src={image} alt={text} />
      <figcaption>{text}</figcaption>
    </figure>
  );
}

export default Banner;
