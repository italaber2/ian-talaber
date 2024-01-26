import HeaderElement from "../header/headerElement";
import headerText from "../../data/headerText.json";

function SkillsPage() {
  return (
    <div className="skills-page">
      <HeaderElement
        headline={headerText.skillsHeadline}
        copyText={headerText.skillsText}
      />
    </div>
  );
}

export default SkillsPage;
