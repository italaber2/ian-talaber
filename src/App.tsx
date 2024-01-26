import PromoElementsContainer from "./components/overview_page/promoElementsContainer";
import HeaderElement from "./components/header/headerElement";
import headerText from "./data/headerText.json";

function App() {
  return (
    <div className="App">
      <HeaderElement
        headline={headerText.overviewHeadline}
        copyText={headerText.overviewText}
      />
      <div>
        <PromoElementsContainer />
      </div>
    </div>
  );
}

export default App;
