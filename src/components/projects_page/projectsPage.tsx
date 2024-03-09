import React from "react";
import ProjectElementsContainer from "./projectElementsContainer";
import HeaderElement from "../common/headerElement";

function ProjectsPage() {
  return (
    <div className="projects">
      <React.Fragment>
        <HeaderElement headerId={2} />
      </React.Fragment>
      <React.Fragment>
        <ProjectElementsContainer />
      </React.Fragment>
    </div>
  );
}

export default ProjectsPage;
