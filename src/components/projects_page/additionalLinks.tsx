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
        >
          <img src="/github-mark-white.png" alt="github" />
        </a>
        <p className="links-text">For project updates</p>
      </div>
      <div className="linkedIn-link">
        <a
          href="https://linkedin.com/in/italaber"
          className="linkedin-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin-logo.png" alt="linkedin" />
        </a>
        <p className="links-text">For professional updates</p>
      </div>
    </div>
  );
}

export default AdditionalLinks;
