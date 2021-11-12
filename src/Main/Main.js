import React, { useState } from "react";
import "./main.scss";
import { nav } from "../appdata";

function Main() {
  const [curArticle, setCurArticle] = useState(0);
  return (
    <main className="main">
      <nav>
        {nav.map((item) => {
          return (
            <button
              className={`navBtn ${
                item.id === curArticle ? "navBtn-active" : ""
              }`}
              key={item.id}
              onClick={() => setCurArticle(item.id)}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
      {nav[curArticle].article}
    </main>
  );
}

export default Main;
