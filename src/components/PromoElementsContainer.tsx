import React from "react";
import PromoElement from "./PromoElement";

function PromoElementsContainer() {
  const handleSkillClick = () => {
    console.log("Skill element clicked!");
    window.location.href =
      "https://giphy.com/gifs/rick-astley-Ju7l5y9osyymQ/fullscreen";
  };

  const handleProjectClick = () => {
    console.log("Project element clicked!");
    window.location.href = "https://giphy.com/gifs/JIX9t2j0ZTN9S/fullscreen";
  };

  return (
    <div className="promo-element-container">
      <div className="promo-element-skill" onClick={handleSkillClick}>
        <PromoElement
          headline="New Skill!"
          text="Miaou."
          imageUrl="https://media.wired.com/photos/5cdefb92b86e041493d389df/16:9/w_1487,h_836,c_limit/Culture-Grumpy-Cat-487386121.jpg"
          altText="A grumpy cat"
        />
      </div>
      <div className="promo-element-project" onClick={handleProjectClick}>
        <PromoElement
          headline="Look, a grumpy cat."
          text="Miaou."
          imageUrl="https://media.wired.com/photos/5cdefb92b86e041493d389df/16:9/w_1487,h_836,c_limit/Culture-Grumpy-Cat-487386121.jpg"
          altText="A grumpy cat"
        />
      </div>
    </div>
  );
}

export default PromoElementsContainer;
