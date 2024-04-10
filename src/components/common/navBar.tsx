import React from "react";
import { Link } from "wouter";

function NavBar() {
  return (
    <div className="container">
      <div className="headshot">
        <Link data-testid="home-page-link" href="/" className="image-link">
          <img src="/headshot.jpeg" alt="headshot" />
          <div className="hover-border"></div>
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
      </nav>
    </div>
  );
}

export default NavBar;
