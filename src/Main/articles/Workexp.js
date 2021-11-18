// import "./skills.scss";

import React, { useState } from "react";

import "./workexp.scss";
import { workExpArts } from "../../appdata";

function Workexp() {
  const [moreArr, setMoreArr] = useState(
    new Array(workExpArts.length).fill(false)
  );

  const moreClick = (indexArt) => {
    let newArr = [...moreArr];
    newArr[indexArt] = !newArr[indexArt];
    setMoreArr(newArr);
  };
  return (
    <article className="workExpArt">
      <h2>WORK EXPERIENCE</h2>

      {workExpArts.map((art, indexArt) => {
        return (
          <div className="article" key={`art${indexArt}`}>
            <h2>{art.header}</h2>
            {art.text
              .slice(0, !moreArr[indexArt] ? art.numberRows : art.text.length)
              .map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            {art.text.length > 1 && (
              <button className="moreBtn" onClick={() => moreClick(indexArt)}>
                {!moreArr[indexArt] ? "more . . ." : "less . . ."}
              </button>
            )}
            <div className="underline"></div>
          </div>
        );
      })}
    </article>
  );
}

export default Workexp;
