import React, { useState, useEffect } from "react";

import "./projectsanim.scss";

function Projectsanim({ projInfo, curProj, setCurProj }) {
  const [position, setPosition] = useState(0);
  // const [curProj, setCurProj] = useState(projInfo.length - 1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosition(1);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const projectCard = (item, index) => {
    let newPosition = {};
    if (position === 0) {
      newPosition = {
        opacity: "1%",
        bottom: item.position1.bottom,
        left: item.position1.left,
        transform: "scale(0.1, 0.1)",
      };
    }
    if (position === 1) {
      newPosition = { ...item.position1, opacity: "100%" };
      if (index === curProj) {
        newPosition.transform = newPosition.transform + "scale(1.2, 1.2)";
      } else {
        newPosition.transform = newPosition.transform + "scale(1, 1)";
      }
    }

    // console.log("newPosition", newPosition);
    return (
      <div
        onClick={() => {
          setCurProj(index);
        }}
        className={`card ${index === curProj && "cardActive"}`}
        key={index}
        style={newPosition}
      >
        <img src={item.img} alt="proj" />
        <p>{item.name}</p>
        {/* <p>{item.text}</p> */}
      </div>
    );
  };

  return (
    <div className="projectsAnim">
      {projInfo.map((item, index) => {
        return projectCard(item, index);
      })}
      <div className="underline-vert"></div>
    </div>
  );
}

export default Projectsanim;
