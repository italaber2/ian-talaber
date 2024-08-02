import React from "react";

function AdditionalLinks() {
  return (
    <div className="links-component">
      <p className="links-title">Stalk Me! (Professionally)</p>
      <div className="github-link">
        <a
          href="https://github.com/italaber2"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-link"
        >
          <img src="/github-mark-white.png" alt="github" />
          <span className="links-text">For project updates</span>
        </a>
      </div>
      <div className="linkedIn-link">
        <a
          href="https://linkedin.com/in/italaber"
          className="linkedin-link"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="linkedin-link"
        >
          <img src="/linkedin-logo.png" alt="linkedin" />
          <span className="links-text">For professional updates</span>
        </a>
      </div>
    </div>
  );
}

export default AdditionalLinks;
