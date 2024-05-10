import React, { useState } from "react";
import HeaderElement from "../common/headerElement";
import MyComponent from "./radarChart";
import jsonData from "../../data/projects.json";

interface ProjectData {
  id: number;
  title: string;
  data: number[];
}

interface ButtonProps {
  projectName: string;
  isSelected: boolean;
  onClick: () => void;
}

interface ButtonWrapperProps {
  setProjectId: (id: number) => void;
}

function Button({ projectName, isSelected, onClick }: ButtonProps) {
  return (
    <button
      className={`project-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {projectName}
    </button>
  );
}

function ButtonWrapper({ setProjectId }: ButtonWrapperProps) {
  const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);

  const handleButtonClick = (projectId: number) => {
    if (selectedButtonId === projectId) {
      return;
    }
    setSelectedButtonId(projectId === selectedButtonId ? null : projectId);
    setProjectId(projectId);
  };

  return (
    <div className="button-wrapper">
      {jsonData.map((item: ProjectData) => (
        <Button
          key={item.id}
          projectName={item.title}
          isSelected={selectedButtonId === item.id}
          onClick={() => handleButtonClick(item.id)}
        />
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
        <ButtonWrapper setProjectId={setSelectedProjectId} />
        {selectedProjectData.length > 0 && (
          <MyComponent seriesData={selectedProjectData} />
        )}
      </React.Fragment>
    </div>
  );
}

export default SkillsPage;
