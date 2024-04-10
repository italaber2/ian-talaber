import React, { useState } from "react";
import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import ElementDetailsLayer from "../common/elementDetailsLayer";

interface PromoElementData {
  id: number;
  title: string;
  content: string;
  extendedContent: string;
  imageUrl: string;
  imageAltText: string;
  highlight: boolean;
}

function PromoComponent({
  id,
  title,
  content,
  extendedContent,
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
    <React.Fragment>
      <div className="promo-element" key={title} onClick={openDetailsLayer}>
        <div className="promo-image" key={title}>
          <img src={imageUrl} alt={imageAltText} />
        </div>
        <div className="promo-text" key={title}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
      {layerVisible && (
        <React.Fragment>
          <ElementDetailsLayer
            element={{
              name: title,
              picture: imageUrl,
              description: extendedContent,
            }}
            onClose={closeDetailsLayer}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

const PromoElement = () => {
  const mergedData: PromoElementData[] = [...projects, ...skills];

  return (
    <div className="promo-component">
      {mergedData
        .filter((item: PromoElementData) => item.highlight)
        .map((item: PromoElementData) => (
          <PromoComponent key={item.title} {...item} />
        ))}
    </div>
  );
};

export default PromoElement;
