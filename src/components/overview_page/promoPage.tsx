import React from "react";
import PromoElementsContainer from "./promoElementsContainer";
import HeaderElement from "../common/headerElement";
import FooterElement from "../common/footerElement";

function PromoPage() {
  return (
    <div className="promo">
      <React.Fragment>
        <HeaderElement headerId={1} />
      </React.Fragment>
      <React.Fragment>
        <PromoElementsContainer />
      </React.Fragment>
      <React.Fragment>
        <FooterElement />
      </React.Fragment>
    </div>
  );
}

export default PromoPage;
