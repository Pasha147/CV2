import { useState } from "react";

import "./skills.scss";
import { skills } from "../../appdata";

function Skills() {
  const [allCheck, setAllCheck] = useState(true);
  const [langCheck, setLangCheck] = useState(true);
  const [libCheck, setLibCheck] = useState(true);
  const [techCheck, setTechCheck] = useState(true);
  const [netResCheck, setNetResCheck] = useState(true);
  const [progCheck, setProgCheck] = useState(true);

  const skillCard = (item) => {
    return (
      <div className="card" key={item.id}>
        {item.icon}
        <p>{item.name}</p>
        <p>{item.text}</p>
      </div>
    );
  };

  return (
    <article className="skillsArt">
      <div className="checkboxes">
        <div className="checkboxes__item">
          <input
            type="checkbox"
            id="0"
            name="all"
            checked={allCheck}
            onChange={() => {
              const newAllCheck = !allCheck;
              setAllCheck(newAllCheck);
              setLangCheck(newAllCheck);
              setLibCheck(newAllCheck);
              setTechCheck(newAllCheck);
              setNetResCheck(newAllCheck);
              setProgCheck(newAllCheck);
            }}
          />
          <label htmlFor="all">All</label>
        </div>
        <div className="checkboxes__item">
          <input
            type="checkbox"
            id="1"
            name="languages"
            checked={langCheck}
            onChange={() => {
              setLangCheck(!langCheck);
            }}
          />
          <label htmlFor="languages">Languages</label>
        </div>
        <div className="checkboxes__item">
          <input
            type="checkbox"
            id="2"
            name="libreries"
            checked={libCheck}
            onChange={() => {
              setLibCheck(!libCheck);
            }}
          />
          <label htmlFor="libreries">libreries</label>
        </div>
        <div className="checkboxes__item">
          <input
            type="checkbox"
            id="3"
            name="technologies"
            checked={techCheck}
            onChange={() => {
              setTechCheck(!techCheck);
            }}
          />
          <label htmlFor="technologies">Technologies</label>
        </div>
        <div className="checkboxes__item">
          <input
            type="checkbox"
            id="4"
            name="netResources"
            checked={netResCheck}
            onChange={() => {
              setNetResCheck(!netResCheck);
            }}
          />
          <label htmlFor="netResources">Net resources</label>
        </div>
        <div className="checkboxes__item">
          <input
            type="checkbox"
            id="5"
            name="programs"
            checked={progCheck}
            onChange={() => {
              setProgCheck(!progCheck);
            }}
          />
          <label htmlFor="programs">Programs</label>
        </div>
      </div>
      <div className="underline"></div>
      <div className="skills">
        {langCheck &&
          skills
            .filter((item) => item.type === "language")
            .map((item) => skillCard(item))}
        {libCheck &&
          skills
            .filter((item) => item.type === "library")
            .map((item) => skillCard(item))}
        {techCheck &&
          skills
            .filter((item) => item.type === "technology")
            .map((item) => skillCard(item))}
        {netResCheck &&
          skills
            .filter((item) => item.type === "netResources")
            .map((item) => skillCard(item))}
        {progCheck &&
          skills
            .filter((item) => item.type === "programs")
            .map((item) => skillCard(item))}
      </div>
    </article>
  );
}

export default Skills;

/*

• IoLogoJavascript	JavaScript (ES6); 
• FaReact React (  React-redux, React-router... ); 
• SiRedux Redux (Redux, React-redux), RxJS;
•	GrHtml5 HTML, DiCss3 CSS (BEM), DiSass SASS (SCSS), BsBootstrap Bootstrap;
• FaNodeJs Node (SiExpress Express, ejs, ...)
•	FiGithub Git, FaGulp Gulp, IoLogoFirebase Firebase, GrHeroku Heroku, SiNetlify Netlyfy,...;
• SiVisualstudiocode	VS Code, WebStorm SiWebstorm, Prepros, GiZeppelin Zeplin;
•	C#, C++, Matlab, QBasic;
•	DiPhotoshop Photoshop, MathCad, Autocad.

LANGUAGES: 
•	Ukrainian – native, 
•	Russian – fluent, 
•	English – intermediate


SKILLS
•	JavaScript (ES6); 
• React (React-redux, React-router... ); 
• Redux (Redux, React-redux), RxJS;
•	HTML, CSS (BEM), SASS (SCSS), Bootstrap;
• Node (Express, ejs, ...)
•	Git, Gulp, Firebase, Heroku, Netlyfy,...;
•	VS Code, WebStorm, Prepros, Zeplin;
•	C#, C++, Matlab, QBasic;
•	Photoshop, MathCad, Autocad.


*/
