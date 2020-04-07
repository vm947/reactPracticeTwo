import React, {Component} from "react";
import Like from "./common/like";



class MoviesTable extends Component {
    render() { 
        const {movies, onDelete, onLike, onSort} = this.props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick ={() => onSort('title')} style ={{cursor: 'pointer'}}>Title</th>
          <th onClick ={() => onSort('genre.name')} style ={{cursor: 'pointer'}}>Genre</th>
          <th onClick ={() => onSort('numberInStock')} style ={{cursor: 'pointer'}}>Stock</th>
          <th onClick ={() => onSort('dailyRentalRate')} style ={{cursor: 'pointer'}}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                liked={movie.liked}
                onClick={() => onLike(movie)}
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger m-2 btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};    
}

export default MoviesTable;
 





