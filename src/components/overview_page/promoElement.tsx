import React, { useState } from "react";
import rawProjects from "../../data/projects.json";
import rawSkills from "../../data/skills.json";
import ElementDetailsLayer from "../common/elementDetailsLayer";
import { Link } from "wouter";

interface PromoElementData {
  id: number;
  title: string;
  content: string;
  extendedContent: string;
  imageUrl: string;
  imageAltText: string;
  highlight: boolean;
  type: "project" | "skill";
}

const projects: PromoElementData[] = rawProjects as PromoElementData[];
const skills: PromoElementData[] = rawSkills as PromoElementData[];

function PromoComponent({
  id,
  title,
  content,
  extendedContent,
  imageUrl,
  imageAltText,
  type,
}: PromoElementData) {
  const [layerVisible, setLayerVisible] = useState(false);

  const openDetailsLayer = () => {
    setLayerVisible(true);
  };

  const closeDetailsLayer = () => {
    setLayerVisible(false);
  };

  const link = (
    <Link
      to={type === "project" ? `/projects?id=${id}` : `/skills?id=${id}`}
      className="layer-link"
    >
      {type === "project" ? "See the project" : "See the skill"}
    </Link>
  );

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
              name: "",
              picture: imageUrl,
              description: extendedContent,
              link: link,
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
