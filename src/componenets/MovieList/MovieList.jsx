import React from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";

const MovieList = (props) => {
  const { movies, onDelete } = props;
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MovieList;
