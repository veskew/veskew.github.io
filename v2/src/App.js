import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './TicTacToe'; // Import the new component

// This is the main page component
function MainPage() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to the main page. Click the button to play Tic-Tac-Toe!
      </p>
      <MyButton to="/tictactoe">Go to Tic-Tac-Toe</MyButton>
    </header>
  );
}

// The main App component now handles the routing
function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/v2' : '/'}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </div>
    </Router>
  );
}

// Your button now uses Link to navigate
function MyButton({ to, children }) {
  return (
    <Link to={to} className="MyButton-link">
      <button className="MyButton">
        {children}
      </button>
    </Link>
  );
}

export default App;
