import React, { useState, useEffect } from "react";
import HeaderElement from "../common/headerElement";
import RadarChart from "./radarChart";
import LineGraph from "./lineGraph";
import jsonData from "../../data/projects.json";
import { defaultSeries } from "../common/lineGraphConfig";
import rotatePhone from "../common/rotatePhone.gif";

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
      {/* Example buttons commented out for brevity */}
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
    null
  );
  const [isLineGraphSelected, setLineGraphSelected] = useState<boolean>(true);
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
      <div className="skills-component">
        {viewportWidth <= 666 ? (
          <img src={rotatePhone} alt="Rotate Phone GIF" />
        ) : (
          <>
            {seriesData.length > 0 && !isLineGraphSelected && (
              <RadarChart seriesData={seriesData} />
            )}
            {isLineGraphSelected && <LineGraph seriesData={seriesData} />}
          </>
        )}
      </div>
    </div>
  );
}

export default SkillsPage;
