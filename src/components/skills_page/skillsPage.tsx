import React, { useState } from "react";
import HeaderElement from "../common/headerElement";
import MyComponent from "./radarChart";
import jsonData from "../../data/projects.json";

interface ProjectData {
  id: number;
  title: string;
  data: number[];
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
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const selectedProject =
    selectedProjectId !== null
      ? jsonData.find((item: ProjectData) => item.id === selectedProjectId)
      : null;

  const selectedProjectData = selectedProject ? selectedProject.data : [];

  return (
    <div className="skills">
      <React.Fragment>
        <HeaderElement headerId={3} />
      </React.Fragment>
      <React.Fragment>
        <ButtonWrapper setSelectedProjectId={setSelectedProjectId} />
        {selectedProjectData.length > 0 && (
          <MyComponent seriesData={selectedProjectData} />
        )}
      </React.Fragment>
    </div>
  );
}

export default SkillsPage;
