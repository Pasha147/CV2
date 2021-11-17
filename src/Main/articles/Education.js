import React, { useState } from "react";

import "./education.scss";
import { educationArts } from "../../appdata";

function Education() {
  const [moreArr, setMoreArr] = useState(
    new Array(educationArts.length).fill(true)
  );

  const moreClick = (indexArt) => {
    let newArr = [...moreArr];
    newArr[indexArt] = !newArr[indexArt];
    setMoreArr(newArr);
  };
  return (
    <article className="educationArt">
      <h2>EDUCATION</h2>
      <div className="img_cont">
        {/* pablic/img */}
        <img src="./img/nuft.jpg" alt="nuft" />
        <img src="./img/imech.jpg" alt="imech" />
      </div>
      {educationArts.map((art, indexArt) => {
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

export default Education;
