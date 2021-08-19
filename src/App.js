import React, { useState, useEffect } from 'react';
import { useRoutes, useRedirect } from "hookrouter";
import './App.css';
import { Table, Button } from 'reactstrap';
import MovieDetails from "./MovieDetail";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>Nice Movies:</p>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>tagline</th>
              <th>vote average</th>
              <th>detail</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((item, id) => {
              return (
                <tr>
                  <th>{item.id}</th>
                  <td>{item.original_title}</td>
                  <td>{item.tagline}</td>
                  <td>{item.vote_average}</td>
                  <td>
                    <Button color="info">detail</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </header>
    </div>
  );
}

export default App;
