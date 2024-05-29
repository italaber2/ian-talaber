import React, { useState } from "react";
import HeaderElement from "../common/headerElement";
import FooterElement from "../common/footerElement";
import RadarChart from "./radarChart";
import LineGraph from "./lineGraph";
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
  setProjectId: (id: number | null) => void;
  setLineGraphSelected: (selected: boolean) => void;
  isLineGraphSelected: boolean;
}

const defaultLineGraphData = [10, 20, 30, 40, 50]; // Example default data

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

function ButtonWrapper({
  setProjectId,
  setLineGraphSelected,
  isLineGraphSelected,
}: ButtonWrapperProps) {
  const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);

  const handleButtonClick = (projectId: number) => {
    setLineGraphSelected(false);
    if (selectedButtonId === projectId) {
      return;
    }
    setSelectedButtonId(projectId);
    setProjectId(projectId);
  };

  const handleLineGraphClick = () => {
    setSelectedButtonId(null);
    setLineGraphSelected(true);
    setProjectId(null);
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
      <Button
        projectName="Line Graph"
        isSelected={isLineGraphSelected}
        onClick={handleLineGraphClick}
      />
    </div>
  );
}

function SkillsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [isLineGraphSelected, setLineGraphSelected] = useState<boolean>(false);

  const selectedProject =
    selectedProjectId !== null
      ? jsonData.find((item: ProjectData) => item.id === selectedProjectId)
      : null;

  const selectedProjectData = selectedProject ? selectedProject.data : [];
  const seriesData = isLineGraphSelected
    ? defaultLineGraphData
    : selectedProjectData;

  return (
    <div className="skills">
      <React.Fragment>
        <HeaderElement headerId={3} />
      </React.Fragment>
      <React.Fragment>
        <ButtonWrapper
          setProjectId={setSelectedProjectId}
          setLineGraphSelected={setLineGraphSelected}
          isLineGraphSelected={isLineGraphSelected}
        />
        {seriesData.length > 0 && !isLineGraphSelected && (
          <RadarChart seriesData={seriesData} />
        )}
        {isLineGraphSelected && <LineGraph seriesData={seriesData} />}
      </React.Fragment>
      <React.Fragment>
        <FooterElement />
      </React.Fragment>
    </div>
  );
}

export default SkillsPage;
