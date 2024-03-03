import React, { useState } from "react";
import jsonData from "../../data/overview.json";
import ElementDetailsLayer from "../common/elementDetailsLayer";

interface PromoElementData {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  imageAltText: string;
}

function PromoComponent({
  id,
  title,
  content,
  imageUrl,
  imageAltText,
}: PromoElementData) {
  const [layerVisible, setLayerVisible] = useState(false);

  const openDetailsLayer = () => {
    setLayerVisible(true);
  };

  const closeDetailsLayer = () => {
    setLayerVisible(false);
  };
  return (
    <div className="promo-element" key={id}>
      <div className="promo-image" key={id}>
        <img src={imageUrl} alt={imageAltText} />
      </div>
      <div className="promo-text" key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={openDetailsLayer}>More Info</button>
      </div>
      {layerVisible && (
        <div className="overlay">
          <div className="modal">
            <ElementDetailsLayer
              element={{
                name: title,
                picture: imageUrl,
                description: imageAltText,
              }}
              onClose={closeDetailsLayer}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const PromoElement = () => {
  return (
    <div className="promo-component">
      {jsonData.map((item: PromoElementData) => (
        <PromoComponent key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PromoElement;
