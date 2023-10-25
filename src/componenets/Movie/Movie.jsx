import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Movie.css";

const Movie = (props) => {
  const { movie, onDelete } = props;
  const imgSrc = movie.poster ? movie.poster : "./image/cinema2.webp";
  return (
    <div className="movie-item">
      <div>
        <img src={imgSrc} alt={`${movie.title} Poster`} />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>
          {" "}
          <span>director:</span> {movie.director}
        </p>
        <p>
          {" "}
          <span>genre:</span> {movie.genre}
        </p>
        <button onClick={() => onDelete(movie.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default Movie;
