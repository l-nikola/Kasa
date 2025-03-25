function Rating({ rating }) {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${index < rating ? "filled" : ""}`}
        ></i>
      ))}
    </div>
  );
}

export default Rating;
