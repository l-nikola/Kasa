function Banner({ image, text }) {
  return (
    <section className="banner">
      <img src={image} alt={text} />
      {text && <p>{text}</p>}
    </section>
  );
}

export default Banner;
