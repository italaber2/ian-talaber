import React from "react";
import { Link } from "wouter";

function NavBar() {
  return (
    <div className="container">
      <div className="headshot">
        <Link data-testid="home-page-link" href="/" className="image-link">
          <img
            src="/headshot.jpeg"
            alt="headshot"
            width="100"
            height="100"
            style={{ cursor: "pointer" }}
          />
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
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
