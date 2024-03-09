import React from "react";
import PromoElementsContainer from "./promoElementsContainer";
import HeaderElement from "../common/headerElement";

function PromoPage() {
  return (
    <div className="promo">
      <React.Fragment>
        <HeaderElement headerId={1} />
      </React.Fragment>
      <React.Fragment>
        <PromoElementsContainer />
      </React.Fragment>
    </div>
  );
}

export default PromoPage;
