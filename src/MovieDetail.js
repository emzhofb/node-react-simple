import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch('/api/movies');
  //     const payload = await response.json();
  //     setMovies(payload.data);
  //   }
  //   getData();
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Nice Movies:</p>
      </header>
    </div>
  );
}

export default App;
