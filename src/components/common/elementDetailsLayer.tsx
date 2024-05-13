import { ReactComponent as CloseIcon } from "./closeIcon.svg";
import React, { useEffect } from "react";
import { Link } from "wouter";

interface ElementDetailsProp {
  element: { name: string; picture: string; description: string };
  onClose: () => void;
}

function ElementDetailsLayer({ element, onClose }: ElementDetailsProp) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="layer">
      <div className="layer-content">
        <h2>{element.name}</h2>
        <img src={element.picture} alt={element.name} />
        <p>{element.description}</p>
        <Link to="/skills" className="layer-link">
          See the project skills
        </Link>
        <button className="button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default ElementDetailsLayer;
