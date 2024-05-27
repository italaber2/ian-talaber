import React, { useState } from "react";
import ElementDetailsLayer from "../common/elementDetailsLayer";

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

  return (
    // Ask about onClick placement on line 35
    <div key={id} className="project-element">
      <div className="project-image" key={title} onClick={openDetailsLayer}>
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
              link: <a href={`/projects?id=${id}`}>View Project</a>,
            }}
            onClose={closeDetailsLayer}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default ProjectElement;
