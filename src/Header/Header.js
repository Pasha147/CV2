import React, { useState } from "react";
import "./header.scss";
import Contacts from "./Contacts";

function Header() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    // console.log("classes", document.body.classList);
    let newTheme;
    theme === "dark" ? (newTheme = "light") : (newTheme = "dark");
    document.body.classList.toggle("light");
    setTheme(newTheme);
  };

  return (
    <header className="header">
      <div className="header__logo" onClick={changeTheme}>
        <img src="./img/Ya3.jpg" alt="Ya" />
      </div>
      <div className="header__info">
        <h1 className="header__title">Pavlo Fernati</h1>

        <h2 className="header__subtitle">Web developer</h2>
        <div className="underline"></div>
        <Contacts />
      </div>
    </header>
  );
}

export default Header;
