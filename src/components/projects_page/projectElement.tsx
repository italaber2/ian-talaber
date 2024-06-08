import React from "react";

interface ProjectData {
  id: number;
  title: string;
  extendedContent: string;
  imageUrl: string;
  projectUrl: string;
  imageAltText: string;
  showLayer: boolean;
}

const ProjectElement = ({
  id,
  title,
  imageUrl,
  projectUrl,
  imageAltText,
}: ProjectData) => {
  return (
    <div key={id} className="project-element">
      <div className="project-feature" key={title}>
        <a
          href={projectUrl}
          aria-label={imageAltText}
          target="_blank"
          rel="noreferrer"
        >
          <img src={imageUrl} alt={imageAltText} />
        </a>
      </div>
    </div>
  );
};

export default ProjectElement;
