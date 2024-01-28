import { jsonData } from "../../data/projects";

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
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const ProjectElement: React.FC = () => {
  return (
    <div>
      {jsonData.map((item: ProjectData) => (
        <ProjectComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProjectElement;
