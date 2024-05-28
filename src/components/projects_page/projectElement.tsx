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
  type: "project" | "skill";
}

const ProjectElement = ({
  id,
  title,
  extendedContent,
  imageUrl,
  imageAltText,
  showLayer,
  type,
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

  // Need to finish updating the logic below so that it works only with skills
  const link = (
    <Link
      to={type === "project" ? `/skills?id=${id}` : `/skills?id=${id}`}
      className="layer-link"
    >
      {type === "project" ? "➡️ See the skills ⬅️" : "➡️ See the skill ⬅️"}
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
