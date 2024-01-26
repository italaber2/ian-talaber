import ProjectElementsContainer from "./projectElementsContainer";
import HeaderElement from "../header/headerElement";
import headerText from "../../data/headerText.json";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <HeaderElement
        headline={headerText.projectsHeadline}
        copyText={headerText.projectsText}
      />
      <div>
        <ProjectElementsContainer />
      </div>
    </div>
  );
}

export default ProjectsPage;
