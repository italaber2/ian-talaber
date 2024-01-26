import React from "react";
import { Link, Route, Switch } from "wouter";
import App from "../App";
import ProjectsPage from "./projects_page/projectsPage";
import SkillsPage from "./skills_page/skillsPage";
import "../style/Navigation.css";

function AppRouter() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link data-testid="home-page-link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link data-testid="project-page-link" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link data-testid="skills-page-link" href="/skills">
              Skills
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/skills" component={SkillsPage} />
      </Switch>
    </div>
  );
}

export default AppRouter;
