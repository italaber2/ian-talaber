import PromoElementComponent from "./components/PromoElement";

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
      <div className="PromoElement">
        <PromoElementComponent
          headline="Look, a grumpy cat."
          text="Miaou."
          imageUrl="https://media.wired.com/photos/5cdefb92b86e041493d389df/16:9/w_1487,h_836,c_limit/Culture-Grumpy-Cat-487386121.jpg"
          altText="A grumpy cat"
        />
      </div>
    </div>
  );
}

export default App;
