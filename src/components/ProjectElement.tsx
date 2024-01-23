interface ProjectElementProps {
  headline: string;
  text: string;
  imageUrl: string;
  altText: string;
}

const ProjectElement: React.FC<ProjectElementProps> = ({
  headline,
  text,
  imageUrl,
  altText,
}) => {
  return (
    <div>
      <img src={imageUrl} alt={altText} style={{ maxWidth: "25%" }} />
      <h2>{headline}</h2>
      <p>{text}</p>
    </div>
  );
};

export default ProjectElement;
