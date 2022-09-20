import "./App.css";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Counter</h1>
        <Counter />
        <p>
          made by Chihiro S.
          <p>Sep.2022</p>
          <p>
            <a href="https://redux.js.org/tutorials/quick-start#use-redux-state-and-actions-in-react-components">
              Tutorial by Redux.js.org
            </a>
          </p>
        </p>
      </header>
    </div>
  );
}

export default App;
