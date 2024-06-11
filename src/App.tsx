import React from "react";
import { Route, Switch } from "wouter";
import ProjectsPage from "./components/projects_page/projectsPage";
import SkillsPage from "./components/skills_page/skillsPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={ProjectsPage} />
        <Route path="/redirect" component={ProjectsPage} />
        <Route path="/skills" component={SkillsPage} />
      </Switch>
    </div>
  );
}

export default App;
