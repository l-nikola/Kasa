import { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapseWrapper">
      <div className="collapse">
        <span>{title}</span>
        <i
          className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
