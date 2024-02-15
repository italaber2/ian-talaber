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
  <div key={id}>
    <img src={imageUrl} alt={imageAltText} style={{ maxWidth: "25%" }} />
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

const ProjectElement: React.FC = () => {
  return (
    <div className="project-element-component">
      {jsonData.map((item: ProjectData) => (
        <ProjectComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProjectElement;
