import React, { useState } from "react";
import jsonData from "../../data/overview.json";
import PromoElementDetailsLayer from "./promoElementDetailsLayer";

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

  const openPromoElementDetails = () => {
    setLayerVisible(true);
  };

  const closePromoElementDetails = () => {
    setLayerVisible(false);
  };
  return (
    <div className="promo-element" key={id}>
      <div
        className="promo-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        }}
      >
        <div className="text-overlay">
          <h2>{title}</h2>
          <p>{content}</p>
          <button onClick={openPromoElementDetails}>More Info</button>
        </div>
      </div>
      {layerVisible && (
        <div className="overlay">
          <div className="modal">
            <PromoElementDetailsLayer
              promoElement={{
                name: "taco",
                picture: "image",
                description: "image description",
              }}
              onClose={closePromoElementDetails}
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
