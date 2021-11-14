import React, { useState, useEffect } from "react";
import "./main.scss";

import { Link, Route, Routes } from "react-router-dom";
// import Mainart from "./articles/Mainart";
// import Education from "./articles/Education";
import { nav } from "../appdata";

function Main() {
  const [curArticle, setCurArticle] = useState(0);

  // setCurArticle(index ? index : 0);

  // const nav1 = useNavigate();

  // if (pathname !== "/") {
  //   window.location.pathname = "/";
  // }

  // useEffect(() => {
  //   let pathname = window.location.pathname;
  //   if (pathname !== "/") {
  //     window.location.pathname = "/";
  //   }
  // }, []);
  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname !== "/") {
      const index = nav.findIndex((e) => e.route === pathname);
      // console.log(index);
      setCurArticle(index);
    }
  }, []);

  return (
    <main className="main">
      <nav className="nav">
        {/* <button
          onClick={() => {
            console.log("------", pathname);
          }}
        >
          asdfadfafd
        </button> */}
        {nav.map((item) => {
          return (
            <Link
              className={`navLink ${
                item.id === curArticle ? "navBtn-active" : ""
              }`}
              key={item.id}
              onClick={() => setCurArticle(item.id)}
              to={item.route}
            >
              {item.name}
            </Link>
          );
        })}

        {/* {nav.map((item) => {
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
        })} */}
      </nav>
      <Routes>
        <Route index element={nav[0].article} />
        {nav.map((item) => {
          return (
            <Route key={item.id} path={item.route} element={item.article} />
          );
        })}
      </Routes>
      {/* без роутера */}
      {/* {nav[curArticle].article} */}
    </main>
  );
}

export default Main;
