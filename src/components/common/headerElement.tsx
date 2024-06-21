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

  const isSkillsPage = location === "/skills";
  const buttonText = isSkillsPage ? "🚧 Projects" : "🤹 Skills ";
  const buttonLink = isSkillsPage ? "/" : "/skills";

  return (
    <React.Fragment>
      <div className="header-content">
        <Link href="/">
          <Banner />
        </Link>
        <p className="header-paragraph">{content}</p>
        <ul>
          <li>
            <Link
              data-testid="dynamic-link"
              href={buttonLink}
              className="header-link"
            >
              {buttonText}
            </Link>
            <a
              data-testid="cv-link"
              href="/IanTalaberCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="header-link"
            >
              📜 CV
            </a>
          </li>

          {/* Still need to figure out how to properly add the Github and LinkedIn links

          {/* ⚬
          <li className="github-link">
            <a
              href="https://github.com/italaber2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                data-testid="github-link"
                src="/github-mark-white.png"
                alt="github"
                width="23"
                height="23"
                style={{ cursor: "pointer" }}
              />
            </a>
          </li>
          ⚬
          <li data-testid="linkedin-link">
            <a
              href="https://linkedin.com/in/italaber"
              className="linkedin-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin-logo.png"
                alt="linkedin"
                width="23"
                height="23"
                style={{ cursor: "pointer" }}
              />
            </a>
          </li> */}
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
