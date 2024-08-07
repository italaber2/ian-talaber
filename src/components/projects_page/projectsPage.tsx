import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import ProjectListContainer from "./projectListContainer";
import AdditionalLinks from "./additionalLinks";
import HeaderElement from "../common/headerElement";
import FooterElement from "../common/footerElement";
import closeIcon from "../common/closeIcon.svg";
import Travolta from "../common/travolta.gif";

function ProjectsPage() {
  const [location] = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (location.includes("redirect")) {
      setShowOverlay(true);
    }
  }, [location]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setShowOverlay(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="projects">
      {showOverlay && (
        <div className="overlay">
          <button className="close-button" onClick={closeOverlay}>
            <img src={closeIcon} alt="Close" />
          </button>
          <div className="gif-container">
            <img src={Travolta} alt="Overlay GIF" />
          </div>
        </div>
      )}
      <HeaderElement headerId={1} />
      <ProjectListContainer />
      <AdditionalLinks />
      <FooterElement />
    </div>
  );
}

export default ProjectsPage;
