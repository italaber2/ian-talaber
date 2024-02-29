interface ProjectElementDetailsProp {
  projectElement: { name: string; picture: string; description: string };
  onClose: () => void;
}

function PromoElementDetailsLayer({
  projectElement,
  onClose,
}: ProjectElementDetailsProp) {
  return (
    <div className="layer">
      <div className="layer-content">
        <h2>{projectElement.name}</h2>
        <img src={projectElement.picture} alt={projectElement.name} />
        <p>{projectElement.description}</p>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PromoElementDetailsLayer;
