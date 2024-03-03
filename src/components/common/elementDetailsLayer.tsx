import { ReactComponent as CloseIcon } from "./closeIcon.svg";

interface ElementDetailsProp {
  element: { name: string; picture: string; description: string };
  onClose: () => void;
}

function ElementDetailsLayer({ element, onClose }: ElementDetailsProp) {
  return (
    <div className="layer">
      <div className="layer-content">
        <h2>{element.name}</h2>
        <img src={element.picture} alt={element.name} />
        <p>{element.description}</p>
        <button className="button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}

export default ElementDetailsLayer;
