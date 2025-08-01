import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  function HandleClick(){
    setCount(count + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButton count={count} onClick={HandleClick} className="MyButton"/>
        <MyButton count={count} onClick={HandleClick} className="MyButton"/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function MyButton({count, onClick}) {
  

  return (
    <button onClick = {onClick}>Buttons have been clicked {count} times!</button>
  );
}

export default App;
