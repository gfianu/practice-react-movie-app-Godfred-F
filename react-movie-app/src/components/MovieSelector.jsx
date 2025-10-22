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
    <div>
      <h2>Movie Selector</h2>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">-- Select Genre --</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
      </select>

      <button onClick={fetchMovies}>Fetch Movies</button>

      {isLoading && <p>Loading movies...</p>}

      {error && <p>{error}</p>}

      {movies.length > 0 && (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
