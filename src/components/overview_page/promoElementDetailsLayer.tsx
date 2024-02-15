interface PromoElementDetailsProp {
  promoElement: { name: string; picture: string; description: string };
  onClose: () => void;
}

function PromoElementDetailsLayer({
  promoElement,
  onClose,
}: PromoElementDetailsProp) {
  return (
    <div className="layer">
      <div className="layer-content">
        <h2>{promoElement.name}</h2>
        <img src={promoElement.picture} alt={promoElement.name} />
        <p>{promoElement.description}</p>
        <button className="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default PromoElementDetailsLayer;
