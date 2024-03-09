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
  content,
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
    <div className="project-element" key={id}>
      <div className="project-image" key={id}>
        <img src={imageUrl} alt={imageAltText} width="100" height="100" />
      </div>
      <div className="project-text" key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={openDetailsLayer}>More Info</button>
      </div>
      {layerVisible && (
        <div className="overlay">
          <div className="modal">
            <ElementDetailsLayer
              element={{
                name: title,
                picture: imageUrl,
                description: extendedContent,
              }}
              onClose={closeDetailsLayer}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const ProjectElement = () => {
  return (
    <div className="project-component">
      {jsonData.map((item: ProjectData) => (
        <ProjectComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProjectElement;
