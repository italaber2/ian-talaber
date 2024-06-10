import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import PromoElementsContainer from "./promoElementsContainer";
import HeaderElement from "../common/headerElement";
import FooterElement from "../common/footerElement";
import closeIcon from "../common/closeIcon.svg";

function PromoPage() {
  const [location] = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (location.includes("redirect")) {
      setShowOverlay(true);
    }
  }, [location]);

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="promo">
      {showOverlay && (
        <div className="overlay">
          <button className="close-button" onClick={closeOverlay}>
            <img src={closeIcon} alt="Close" />{" "}
          </button>
          <div className="gif-container">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWhkOWg2ZjQ2dmcxMTVhOTZtZTk4eHB4cWZ6bDFsZzZvanA0YmI0cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tvGOBZKNEX0ac/giphy.webp"
              alt="Overlay GIF"
            />
          </div>
        </div>
      )}
      <React.Fragment>
        <HeaderElement headerId={1} />
      </React.Fragment>
      <React.Fragment>
        <PromoElementsContainer />
      </React.Fragment>
      <React.Fragment>
        <FooterElement />
      </React.Fragment>
    </div>
  );
}

export default PromoPage;
