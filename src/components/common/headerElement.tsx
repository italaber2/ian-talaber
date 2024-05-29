import React from "react";
import jsonData from "../../data/headers.json";
import { Link } from "wouter";

export interface HeaderContent {
  id: number;
  title: string;
  content: string;
}

const getHeaderDataById = (id: number) => {
  const foundItem = jsonData.find((item) => item.id === id);

  return foundItem || null;
};

const HeaderComponent = ({ id, title, content }: HeaderContent) => (
  <React.Fragment>
    <div className="header-component">
      <Link href="/" key={id}>
        <h1>{title}</h1>
      </Link>
    </div>
    <nav className="nav">
      <ul>
        <li>
          <Link
            data-testid="project-page-link"
            href="/projects"
            className="nav-link"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            data-testid="skills-page-link"
            href="/skills"
            className="nav-link"
          >
            Skills
          </Link>
        </li>
      </ul>
      <p>{content}</p>
    </nav>
  </React.Fragment>
);

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
