import React, { useState, useEffect } from "react";
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
  selectedProjectId: number | null;
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
  selectedProjectId,
  setProjectId,
  setLineGraphSelected,
  isLineGraphSelected,
}: ButtonWrapperProps) {
  const handleButtonClick = (projectId: number) => {
    setLineGraphSelected(false);
    setProjectId(projectId);
  };

  const handleLineGraphClick = () => {
    setLineGraphSelected(true);
    setProjectId(null);
  };

  return (
    <div className="button-wrapper">
      {jsonData.map((item: ProjectData) => (
        <Button
          key={item.id}
          projectName={item.title}
          isSelected={selectedProjectId === item.id}
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
    () => {
      const searchParams = new URLSearchParams(window.location.search);
      const projectId = searchParams.get("id");
      return projectId ? parseInt(projectId, 10) : null;
    }
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
      <HeaderElement headerId={3} />
      <ButtonWrapper
        selectedProjectId={selectedProjectId}
        setProjectId={setSelectedProjectId}
        setLineGraphSelected={setLineGraphSelected}
        isLineGraphSelected={isLineGraphSelected}
      />
      {seriesData.length > 0 && !isLineGraphSelected && (
        <RadarChart seriesData={seriesData} />
      )}
      {isLineGraphSelected && <LineGraph seriesData={seriesData} />}
      <FooterElement />
    </div>
  );
}

export default SkillsPage;
