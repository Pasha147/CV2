import React, { useEffect, useState } from "react";
import "./projectsanim.scss";
import { mainAnim } from "../../appdata";

function Projectsanim() {
  const [position, setPosition] = useState(
    new Array(mainAnim.length).fill({
      bottom: "20%",
      left: "40%",
      opacity: "0",
    })
  );

  useEffect(() => {
    let newPosition = [...position];

    newPosition = newPosition.map((item, i) => {
      const n = newPosition.length;
      let newLeft = `${Math.round((90 * i) / n) + 2.5}%`;
      let newBottom = `${(Math.round(Math.random() * 4) - 2) * 10 + 18}%`;
      return {
        bottom: newBottom,
        left: newLeft,
        opacity: "100%",
        // width: "4rem",
        // height: "4rem",
      };
    });
    // console.log(newPosition);
    let time = 500 / position.length;
    let newPosition1 = [...position];
    position.map((item, index) => {
      let time1 = time * index + 200;
      const timeout = setTimeout(() => {
        newPosition1[index] = newPosition[index];
        setPosition([...newPosition1]);
      }, time1);
      return () => clearTimeout(timeout);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="projectsAnim">
      {mainAnim.map((icon, index) => {
        return (
          <div key={index} className="card" style={position[index]}>
            {icon}
          </div>
        );
      })}
    </div>
  );
}

export default Projectsanim;
