import React from "react";

const FooterComponent = () => (
  <React.Fragment>
    <div className="footer-component">
      <ul>
        <li>
          <a
            data-testid="github-link"
            href="https://github.com/italaber2"
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github-mark-white.png"
              alt="github"
              width="25"
              height="25"
              style={{ cursor: "pointer" }}
            />
          </a>
        </li>
        <li>
          <a
            data-testid="linkedin-link"
            href="https://linkedin.com/in/italaber"
            className="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin-logo.png"
              alt="linkedin"
              width="25"
              height="25"
              style={{ cursor: "pointer" }}
            />
          </a>
        </li>
      </ul>
    </div>
  </React.Fragment>
);

export default FooterComponent;
