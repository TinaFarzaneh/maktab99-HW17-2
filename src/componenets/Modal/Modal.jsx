import React from "react";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  onAdd,
  newMovieTitle,
  setNewMovieTitle,
  newMovieDirector,
  setNewMovieDirector,
  newMovieGenre,
  setNewMovieGenre,
}) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <h2>Add NewMovie</h2>
          {/* <input
            type="text"
            placeholder="MovieTitle"
            value={newMovieTitle}
            onChange={(e) => setNewMovieTitle(e.target.value)}
          /> */}
          <input
            className="input"
            type="text"
            placeholder="MovieTitle"
            value={newMovieTitle}
            onChange={(e) => setNewMovieTitle(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="MovieDirector"
            value={newMovieDirector}
            onChange={(e) => setNewMovieDirector(e.target.value)}
          /> */}
          <input
            className="input"
            type="text"
            placeholder="MovieDirector"
            value={newMovieDirector}
            onChange={(e) => setNewMovieDirector(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="MovieGenre"
            value={newMovieGenre}
            onChange={(e) => setNewMovieGenre(e.target.value)}
          />
          <button onClick={onAdd}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    )
  );
};

export default Modal;
