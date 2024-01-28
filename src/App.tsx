import PromoElementsContainer from "./components/overview_page/promoElementsContainer";
import HeaderElement from "./components/header/headerElement";

function App() {
  return (
    <div className="App">
      <HeaderElement headerId={1} />
      <div>
        <PromoElementsContainer />
      </div>
    </div>
  );
}

export default App;
