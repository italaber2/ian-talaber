import ProjectElementsContainer from "./projectElementsContainer";
import HeaderElement from "../header/headerElement";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <HeaderElement headerId={2} />
      <div>
        <ProjectElementsContainer />
      </div>
    </div>
  );
}

export default ProjectsPage;
