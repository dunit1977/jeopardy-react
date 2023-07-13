// import logo from './logo.svg';
import './App.css';
import JeopardyService from "./JeopardyService";
import Clock from "./Clock";
import JeopardyPlayerResponse from "./JeopardyPlayerResponse";
import Music from "./Music";
// import {Button} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <img src="https://logodix.com/logo/2064106.png" />
        <p>
          Hit Button Below to get a clue <code>from the Jeopardy API</code>
        </p>
            <JeopardyService/>
          <JeopardyPlayerResponse/>

        <a
          className="App-link"
          href="https://www.jeopardy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          JEAPORDY! Homepage
        </a>
        <br>
        </br>
        <a
            className="App-link"
            href="https://www.reddit.com/r/Jeopardy/comments/hvn5ei/want_a_good_laugh_heres_drunk_80s90s_alex_trebek/"
            target="_blank"
            rel="noopener norferrer"
        >
          Meet Alex Trebek!
        </a>
          <Music></Music>
          <Clock></Clock>
      </header>
      <br>
      </br>
    </div>
  );
}

export default App;
