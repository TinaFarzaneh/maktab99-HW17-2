import React, { useState } from "react";
import "./App.css";
import { FaPlus } from "react-icons/fa";
import MovieList from "./componenets/MovieList/MovieList";
import Modal from "./componenets/Modal/Modal";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Lost",
      director: "Jeffrey Lieber",
      genre: "Drama",
      poster: "./image/lost.jpg",
    },
    {
      id: 2,
      title: "Fall",
      director: "Scott Mann",
      genre: "Thriller",
      poster: "./image/fall.jpg",
    },
    {
      id: 3,
      title: "Radius",
      director: "Steeve Léonard",
      genre: "Mysterious",
      poster: "./image/Radius.jpg",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieDirector, setNewMovieDirector] = useState("");
  const [newMovieGenre, setNewMovieGenre] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: newMovieTitle,
      director: newMovieDirector,
      poster: "",
      genre: newMovieGenre,
    };

    setMovies([...movies, newMovie]);
    setNewMovieTitle("");
    setNewMovieDirector("");
    setNewMovieGenre("");
    closeModal();
  };

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <div className="App">
      <div className="add-movie">
        <h1>Movie List</h1>
        <div className="add-movie-icon" onClick={openModal}>
          <FaPlus size={20} />
        </div>
      </div>
      <MovieList movies={movies} onDelete={handleDeleteMovie} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAdd={handleAddMovie}
        newMovieTitle={newMovieTitle}
        setNewMovieTitle={setNewMovieTitle}
        newMovieDirector={newMovieDirector}
        setNewMovieDirector={setNewMovieDirector}
        newMovieGenre={newMovieGenre}
        setNewMovieGenre={setNewMovieGenre}
      />
    </div>
  );
};

export default App;
