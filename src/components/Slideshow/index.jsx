import { useState } from "react";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures?.length;

  if (totalPictures === 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" />
      </div>
    );
  }

  const goNext = () => {
    setCurrentIndex(currentIndex === totalPictures - 1 ? 0 : currentIndex + 1);
  };

  const goPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalPictures - 1 : currentIndex - 1);
  };

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      <button className="slideshow__prev" onClick={goPrevious}>
        <i className="fas fa-chevron-left"></i>
      </button>

      <button className="slideshow__next" onClick={goNext}>
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="slideshow__counter">
        {currentIndex + 1}/{totalPictures}
      </div>
    </div>
  );
}

export default Slideshow;
