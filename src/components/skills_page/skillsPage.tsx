import React, { useState, useEffect } from "react";
import HeaderElement from "../common/headerElement";
import LineGraph from "./lineGraph";
import { defaultSeries } from "./lineGraphConfig";
import rotatePhone from "../common/rotatePhone.gif";
import FooterElement from "../common/footerElement";

const defaultLineGraphData = defaultSeries[0].data;

function SkillsPage() {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="skills">
      <HeaderElement headerId={2} />
      <div className="skills-component">
        {viewportWidth <= 606 ? (
          <img src={rotatePhone} alt="Rotate Phone GIF" />
        ) : (
          <>
            <LineGraph
              seriesData={defaultLineGraphData}
              data-testid="line-graph"
            />
          </>
        )}
      </div>
      <FooterElement />
    </div>
  );
}

export default SkillsPage;
