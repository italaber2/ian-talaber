import React from "react";
import PromoElementsContainer from "./components/overview_page/promoElementsContainer";
import HeaderElement from "./components/header/headerElement";

function App() {
  const photo = require("/Users/ian.talaber/Documents/mentoring/not-xkcd/src/images/quackulator.png");
  const photo2 = require("/Users/ian.talaber/Documents/mentoring/not-xkcd/src/images/react.png");
  return (
    <div className="app">
      <React.Fragment>
        <HeaderElement headerId={1} />
      </React.Fragment>
      <React.Fragment>
        <PromoElementsContainer />
      </React.Fragment>
      <div>
        <img src={photo} alt=""></img>
        <img src={photo2} alt=""></img>
      </div>
    </div>
  );
}

export default App;
