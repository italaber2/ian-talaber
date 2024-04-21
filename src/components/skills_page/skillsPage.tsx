import React, { useState } from "react";
import HeaderElement from "../common/headerElement";
import MyComponent from "./radarChart";
import jsonData from "../../data/projects.json";

interface ProjectData {
  id: number;
  title: string;
}

interface ButtonWrapperProps {
  setSelectedProjectId: (id: number) => void;
}

function ButtonWrapper({ setSelectedProjectId }: ButtonWrapperProps) {
  return (
    <div className="button-wrapper">
      {jsonData.map((item: ProjectData) => (
        <button
          key={item.id}
          onClick={() => {
            setSelectedProjectId(item.id);
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

function SkillsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState(0);
  return (
    <div className="skills">
      <React.Fragment>
        <HeaderElement headerId={3} />
      </React.Fragment>
      <React.Fragment>
        <ButtonWrapper
          setSelectedProjectId={(id: number) => {
            return setSelectedProjectId(id);
          }}
        ></ButtonWrapper>
        {/* Each button should take the json.title as it's text and json.id as the value */}
        {/* useState variable to set selected project id and hand it over to MyComponent */}
        <MyComponent></MyComponent>
      </React.Fragment>
    </div>
  );
}

export default SkillsPage;
