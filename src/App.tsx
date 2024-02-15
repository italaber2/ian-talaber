import PromoElementsContainer from "./components/overview_page/promoElementsContainer";
import HeaderElement from "./components/header/headerElement";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <HeaderElement headerId={1} />
      </div>
      <div className="Promo">
        <PromoElementsContainer />
      </div>
    </div>
  );
}

export default App;
