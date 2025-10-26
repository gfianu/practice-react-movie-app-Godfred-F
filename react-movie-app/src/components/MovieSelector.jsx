import { useState } from "react";

export default function MovieSelector() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  const moviesList = {
    Action: ["Terminator", "The Matrix"],
    Comedy: ["The Mask", "Coming to America"],
    Drama: ["The Godfather", "Goodfellas"],
  };

  const fetchMovies = () => {
    setError("");
    setMovies([]);

    if (!selectedGenre) {
      setError("Please select a genre before fetching movies.");
      return;
    }
    setIsloading(true);

    setTimeout(() => {
      setMovies(moviesList[selectedGenre] || []);
      setIsloading(false);
    }, 1500);
  };

  return (
    <div className="container">
      <h2>Movie Selector</h2>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="select"
      >
        <option value="">-- Select Genre --</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>

      <button onClick={fetchMovies} className="button">
        Fetch Movies
      </button>

      {isLoading && <p className="loading">Loading movies...</p>}

      {error && <p className="error">{error}</p>}

      {movies.length > 0 && (
        <ul className="list">
          {movies.map((movie, index) => (
            <li key={index} className="item">
              {movie}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
