import React, { useState } from "react";
import "./main.scss";
import { nav } from "../appdata";

import Skills from "./articles/Skills";
import Mainart from "./articles/Mainart";
import Projects from "./articles/Projects";
import Education from "./articles/Education";
import Workexp from "./articles/Workexp";
import ContactsArt from "./articles/ContactsArt";

function Main() {
  const [curArticle, setCurArticle] = useState(0);
  return (
    <main className="main">
      <nav>
        {nav.map((item) => {
          return (
            <button
              className={`navBtn ${item.id === curArticle && "navBtn-active"}`}
              key={item.id}
              onClick={() => setCurArticle(item.id)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
      {curArticle === 0 && <Mainart />}
      {curArticle === 1 && <Skills />}
      {curArticle === 2 && <Projects />}
      {curArticle === 3 && <Education />}
      {curArticle === 4 && <Workexp />}
      {curArticle === 5 && <ContactsArt />}
    </main>
  );
}

export default Main;
