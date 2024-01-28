import React from "react";
import PromoElement from "./promoElement";

function PromoElementsContainer() {
  const handleClick = () => {
    window.location.href =
      "https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ/fullscreen";
  };

  return (
    <div className="promo-element-container">
      <div className="promo-element-skill" onClick={handleClick}>
        <PromoElement />
      </div>
    </div>
  );
}

export default PromoElementsContainer;
