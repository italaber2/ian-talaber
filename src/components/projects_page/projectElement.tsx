import React, { useState } from "react";
import jsonData from "../../data/projects.json";
import ElementDetailsLayer from "../common/elementDetailsLayer";

interface ProjectData {
  id: number;
  title: string;
  content: string;
  extendedContent: string;
  imageUrl: string;
  imageAltText: string;
}

function ProjectComponent({
  id,
  title,
  // content,
  extendedContent,
  imageUrl,
  imageAltText,
}: ProjectData) {
  const [layerVisible, setLayerVisible] = useState(false);

  const openDetailsLayer = () => {
    setLayerVisible(true);
  };

  const closeDetailsLayer = () => {
    setLayerVisible(false);
  };
  return (
    <React.Fragment>
      <div className="project-element" key={title} onClick={openDetailsLayer}>
        <div className="project-image" key={title}>
          <img src={imageUrl} alt={imageAltText} width="100" height="100" />
        </div>
        <div className="project-text" key={title}>
          <h2>{title}</h2>
        </div>
      </div>
      {layerVisible && (
        <React.Fragment>
          <ElementDetailsLayer
            element={{
              name: "",
              picture: imageUrl,
              description: extendedContent,
            }}
            onClose={closeDetailsLayer}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const ProjectElement = () => {
  return (
    <div className="project-component">
      {jsonData.map((item: ProjectData) => (
        <ProjectComponent key={item.title} {...item} />
      ))}
    </div>
  );
};

export default ProjectElement;
