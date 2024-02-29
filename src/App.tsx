import React from "react";
import PromoElementsContainer from "./components/overview_page/promoElementsContainer";
import HeaderElement from "./components/header/headerElement";

function App() {
  return (
    <div className="app">
      <React.Fragment>
        <HeaderElement headerId={1} />
      </React.Fragment>
      <React.Fragment>
        <PromoElementsContainer />
      </React.Fragment>
    </div>
  );
}

export default App;
