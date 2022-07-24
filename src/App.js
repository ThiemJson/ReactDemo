import "./App.css";
import { CounterProvider } from "./components/provider/CounterProvider";
import { CounterContext } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <CounterContext.Consumer>
        {({ count }) => <h3>{count}</h3>}
      </CounterContext.Consumer>
      <CounterContext.Consumer>
        {({ updateCount }) => (
          <button onClick={updateCount}>Update value</button>
        )}
      </CounterContext.Consumer>
    </CounterProvider>
  );
}

export default App;
