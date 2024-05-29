import React from "react";
import ProjectListContainer from "./projectListContainer";
import HeaderElement from "../common/headerElement";
import FooterElement from "../common/footerElement";

function ProjectsPage() {
  return (
    <div className="projects">
      <React.Fragment>
        <HeaderElement headerId={2} />
      </React.Fragment>
      <React.Fragment>
        <ProjectListContainer />
      </React.Fragment>
      <React.Fragment>
        <FooterElement />
      </React.Fragment>
    </div>
  );
}

export default ProjectsPage;
