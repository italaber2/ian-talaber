import ProjectElement from "./projectElement";

function ProjectElementsContainer() {
  const handleProjectClick = () => {
    console.log("Project element clicked!");
    window.location.href = "https://giphy.com/gifs/JIX9t2j0ZTN9S/fullscreen";
  };

  return (
    <div className="project-element-container">
      <div className="project-element" onClick={handleProjectClick}>
        <ProjectElement />
      </div>
    </div>
  );
}

export default ProjectElementsContainer;
