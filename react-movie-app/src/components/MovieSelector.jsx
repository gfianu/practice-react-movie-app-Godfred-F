
import { useState } from "react";

export default function MovieSelector() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  const moviesList = [
    { genre: "action", titles: ["Terminator", "The Matrix"] },
    { genre: "comedy", titles: ["The Mask", "Coming to America"] },
    { genre: "drama", titles: ["The Godfather", "Goodfellas"] },
  ];

}
