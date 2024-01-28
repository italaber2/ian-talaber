import { jsonData } from "../../data/overview";

interface PromoElementData {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  imageAltText: string;
}

const ProjectComponent: React.FC<PromoElementData> = ({
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

const PromoElement: React.FC = () => {
  return (
    <div>
      {jsonData.map((item: PromoElementData) => (
        <ProjectComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PromoElement;
