import PromoElementComponent from "./components/PromoElement";
import PromoElementsContainer from "./components/PromoElementsContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 data-testid="app-title">A Very Clever Page Title</h1>
        <p data-testid="copy-text">
          All of a sudden go crazy cat snacks chase imaginary bugs chase mice
          chew foot claw drapes destroy couch find something else more
          interesting.
        </p>
      </header>
      <div>
        <PromoElementsContainer />
      </div>
    </div>
  );
}

export default App;
