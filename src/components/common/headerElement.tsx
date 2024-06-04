import React from "react";
import jsonData from "../../data/headers.json";
import { Link, useLocation } from "wouter";
import { ReactComponent as Banner } from "./pageBanner.svg";

export interface HeaderContent {
  id: number;
  title: string;
  content: string;
}

const getHeaderDataById = (id: number) => {
  const foundItem = jsonData.find((item) => item.id === id);
  return foundItem || null;
};

const HeaderComponent = ({ id, title, content }: HeaderContent) => {
  const [location] = useLocation();

  return (
    <React.Fragment>
      <div className="header-content">
        <Link href="/" key={id}>
          <Banner />
        </Link>
        <p className="header-paragraph">{content}</p>
        <ul>
          <li>
            <Link
              data-testid="project-page-link"
              href="/projects"
              className="header-link-project"
              style={{ color: location === "/projects" ? "blue" : "white" }}
            >
              Projects
            </Link>
          </li>
          •
          <li>
            <Link
              data-testid="skills-page-link"
              href="/skills"
              className="header-link-skills"
              style={{ color: location === "/skills" ? "blue" : "white" }}
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

interface HeaderElementProps {
  headerId: number;
}

const HeaderElement = ({ headerId }: HeaderElementProps) => {
  const headerData = getHeaderDataById(headerId);

  if (!headerData) {
    return <div>No data found for the specified ID</div>;
  }

  const { id, title, content } = headerData;

  return (
    <React.Fragment>
      <HeaderComponent key={id} id={id} title={title} content={content} />
    </React.Fragment>
  );
};

export default HeaderElement;
