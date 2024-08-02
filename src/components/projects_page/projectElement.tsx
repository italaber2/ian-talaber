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
  extendedContent,
}: ProjectData) => {
  return (
    <div key={id} className="project-element">
      <div className="project-feature" key={title}>
        <a
          href={projectUrl}
          aria-label={imageAltText}
          target="_blank"
          rel="noreferrer"
          data-testid="project-link"
        >
          <img src={imageUrl} alt={imageAltText} />
        </a>
        <p className="project-feature-name" data-testid="project--name">
          {title}
        </p>
        <p
          className="project-feature-description"
          data-testid="project-description"
        >
          {extendedContent}
        </p>
      </div>
    </div>
  );
};

export default ProjectElement;
