import React from "react";

function ProjectLinks() {
  return (
    <div className="links-component">
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
      </li>
    </div>
  );
}

export default ProjectLinks;
