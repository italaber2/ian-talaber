import React from "react";
import jsonData from "../../data/projects.json";

interface ProjectData {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  imageAltText: string;
}

const ProjectComponent: React.FC<ProjectData> = ({
  id,
  title,
  content,
  imageUrl,
  imageAltText,
}) => (
  <div className="project-element" key={id}>
    <img src={imageUrl} alt={imageAltText} style={{ maxWidth: "25%" }} />
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const ProjectElement: React.FC = () => {
  return (
    <div className="project-component">
      {jsonData.map((item: ProjectData) => (
        <ProjectComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProjectElement;
