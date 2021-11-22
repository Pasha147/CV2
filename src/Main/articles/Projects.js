import React, { useState } from "react";

import "./projects.scss";
import { projInfo } from "../../appdata";
import Projectsanim from "./Projectsanim";

function Projects() {
  const [curProj, setCurProj] = useState(projInfo.length - 1);

  return (
    <article className="projects">
      <h2>MY PROJECTS</h2>
      <p>(Try to click one of them to view the description)</p>

      <Projectsanim
        projInfo={projInfo}
        curProj={curProj}
        setCurProj={setCurProj}
      />
      <div className="separ">
        <span className="separ__left">JS</span>
        <span className="separ__right">Other languages</span>
      </div>
      <div className="underline"></div>
      <div className="projectArt">
        {/* <p>{`curent project ${curProj}`}</p> */}
        <h2>{projInfo[curProj].header}</h2>
        <img src={projInfo[curProj].img} alt="Pr_img" />
        {projInfo[curProj].text}
      </div>
    </article>
  );
}

export default Projects;
