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

  const closeDetailsLayer = () => {
    setLayerVisible(false);
  };

  return (
    <div>
      {/* <div className="projects-list"> */}
      <div
        key={id}
        className="project-element"
        onClick={() => {
          setLayerVisible(true);
        }}
      >
        <div className="project-image" key={title}>
          <img src={imageUrl} alt={imageAltText} width="100" height="100" />
        </div>
        <h2 className="project-text">{title}</h2>
      </div>
      {/* </div> */}
      {layerVisible && (
        <ElementDetailsLayer
          element={{
            name: title,
            picture: imageUrl,
            description: extendedContent,
            link: <a href={`/projects?id=${id}`}>View Project</a>,
          }}
          onClose={closeDetailsLayer}
        />
      )}
    </div>
  );
};

export default ProjectElement;
