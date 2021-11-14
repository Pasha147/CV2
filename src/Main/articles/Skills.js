import { useState } from "react";

import "./skills.scss";
import { skills } from "../../appdata";

function Skills() {
  //get types from skills
  const [types, setTypes] = useState(
    ["all", ...new Set(skills.map((item) => item.type))].map((e) => {
      return { name: e, ch: true };
    })
  );

  const [filtersOn, setFiltersOn] = useState(false);

  // console.log("types:>>", types);
  const skillCard = (item) => {
    return (
      <div className="card" key={item.id}>
        {item.icon}
        <p>{item.name}</p>
        <p>{item.text}</p>
      </div>
    );
  };

  const handleCheck = (index) => {
    let newTypes = [...types];
    if (types[index].name === "all") {
      const newCh = !types[index].ch;
      newTypes.forEach((e) => {
        e.ch = newCh;
      });
    } else {
      newTypes[index].ch = !types[index].ch;
      // console.log("newTypes", newTypes);
    }
    setTypes(newTypes);
  };

  return (
    <article className="skillsArt">
      <div className="burger">
        <div className="underline"></div>
        <button
          className={`btn ${!filtersOn ? "btnOff" : ""}`}
          onClick={() => {
            setFiltersOn(!filtersOn);
          }}
        >
          filters
        </button>
        <div className="underline"></div>
      </div>
      <div className={`checkboxes ${!filtersOn ? "checkboxesOff" : ""}`}>
        {types.map((item, index) => {
          return (
            <div className="checkboxes__item" key={index}>
              <input
                type="checkbox"
                id={index}
                name={item.name}
                checked={item.ch}
                onChange={() => handleCheck(index)}
              />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          );
        })}
      </div>

      <div className="underline"></div>
      <div className="skills">
        {types.map((e) => {
          return (
            e.ch &&
            skills
              .filter((item) => item.type === e.name)
              .map((item) => skillCard(item))
          );
        })}
      </div>
    </article>
  );
}

export default Skills;
