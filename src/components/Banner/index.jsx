function Banner({ image, text }) {
  const brightnessClass = text ? "banner__text" : "";
  return (
    <section className={`banner ${brightnessClass}`}>
      <img src={image} alt={text} />
      {text && <p>{text}</p>}
    </section>
  );
}

export default Banner;
