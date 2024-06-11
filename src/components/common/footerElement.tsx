import React from "react";

const FooterComponent = () => (
  <React.Fragment>
    <div className="footer-component">
      🏳️‍🌈
      <ul>
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
              width="30"
              height="30"
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
              width="30"
              height="30"
              style={{ cursor: "pointer" }}
            />
          </a>
        </li>
      </ul>
    </div>
  </React.Fragment>
);

export default FooterComponent;
