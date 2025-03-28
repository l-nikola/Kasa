import { useState } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapseWrapper">
      <div className="collapse">
        <span>{title}</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
        </button>
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
