import React, { useState } from "react";
import ElementDetailsLayer from "../common/elementDetailsLayer";
import { Link } from "wouter";

interface ProjectData {
  id: number;
  title: string;
  extendedContent: string;
  imageUrl: string;
  imageAltText: string;
  showLayer: boolean;
}

const ProjectElement = ({
  id,
  title,
  extendedContent,
  imageUrl,
  imageAltText,
  showLayer,
}: ProjectData) => {
  const [layerVisible, setLayerVisible] = useState(showLayer);

  const openDetailsLayer = () => {
    setLayerVisible(true);
  };

  const closeDetailsLayer = () => {
    setLayerVisible(false);
  };

  const handleDivClick = () => {
    if (!layerVisible) {
      openDetailsLayer();
    }
  };

  const handleButtonClick = () => {
    closeDetailsLayer();
  };

  // Doesn't link to anything at the moment as radar graphs for the skills are disabled
  const link = (
    <Link className="layer-link" to={`/skills?id=${id}`}>
      {/* ➡️ See the skills ⬅️ */}
    </Link>
  );

  return (
    <div key={id} className="project-element" onClick={handleDivClick}>
      <div className="project-image" key={title}>
        <img src={imageUrl} alt={imageAltText} width="100" height="100" />
      </div>
      <h2 className="project-text">{title}</h2>
      {layerVisible && (
        <React.Fragment>
          <ElementDetailsLayer
            element={{
              name: title,
              picture: imageUrl,
              description: extendedContent,
              link: link,
            }}
            onClose={closeDetailsLayer}
          />
          <button onClick={handleButtonClick}>Close</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProjectElement;
