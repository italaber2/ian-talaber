import React, { useState } from "react";
import HeaderElement from "../common/headerElement";
import FooterElement from "../common/footerElement";
import RadarChart from "./radarChart";
import LineGraph from "./lineGraph";
import jsonData from "../../data/projects.json";
import { defaultSeries } from "../common/lineGraphConfig";

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

const defaultLineGraphData = defaultSeries[0].data;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleButtonClick = (projectId: number) => {
    setLineGraphSelected(false);
    setProjectId(projectId);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLineGraphClick = () => {
    setLineGraphSelected(true);
    setProjectId(null);
  };

  return (
    <div className="button-wrapper">
      {/* {jsonData.map((item: ProjectData) => (
        <Button
          key={item.id}
          projectName={item.title}
          isSelected={selectedProjectId === item.id}
          onClick={() => handleButtonClick(item.id)}
        />
      ))} */}
      {/* <Button
        projectName="Skills Over Time"
        isSelected={isLineGraphSelected}
        onClick={handleLineGraphClick}
      /> */}
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
  const [isLineGraphSelected, setLineGraphSelected] = useState<boolean>(true); // Default to true

  const selectedProject =
    selectedProjectId !== null
      ? jsonData.find((item: ProjectData) => item.id === selectedProjectId)
      : null;

  const selectedProjectData: number[] = selectedProject
    ? selectedProject.data
    : [];

  const seriesData: number[] = isLineGraphSelected
    ? defaultLineGraphData
    : selectedProjectData;

  return (
    <div className="skills">
      <HeaderElement headerId={2} />
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
