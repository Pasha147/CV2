import React from "react";
import "./App.scss";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  // useEffect(() => {
  //   let pathname = window.location.pathname;
  //   if (pathname !== "/") {
  //     window.location = "/";
  //   }
  // }, []);
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
