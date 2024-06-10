import React from "react";
import { Route, Switch } from "wouter";
import PromoPage from "./components/overview_page/promoPage";
import ProjectsPage from "./components/projects_page/projectsPage";
import SkillsPage from "./components/skills_page/skillsPage";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={PromoPage} />
        <Route path="/redirect" component={PromoPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/skills" component={SkillsPage} />
      </Switch>
    </div>
  );
}

export default App;
