import React, { Component } from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
<<<<<<< HEAD
      <button className="btn-primary" onClick={() => history.push("/movies")}>
        Save
      </button>
=======
      <button className="btn-primary" onClick={() => history.push('/movies')}>Save</button>
>>>>>>> 77ac2f65c4f4517318a221b831e3173a51edd243
    </div>
  );
};

export default MovieForm;
