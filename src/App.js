import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="content">
          <div className="boxBox">
           <Board />
          </div>
          <div className="history">

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
