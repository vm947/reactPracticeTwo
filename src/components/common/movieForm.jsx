import React from "react";
import Joi from "joi-browser";
import Form from "./form";
import { getMovie, saveMovie } from "../../services/movieService";
import { getGenres } from "../../services/genreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
      //the params are checked. the /:id of the route. If route is new--empty page--then below is not executed
      //if params is /:id then below is executed

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
      //the grabbed object is then converted into an object with mapToViewModel THEN STORED IN THE STATE
      //the updated state is used by the METHODS IN INPUT.JSX
    } catch (error) {
      if (error /*error.response && error.response.status === 404*/)
        return this.props.history.replace("/not-found");
      //the moviedId (with params) is grabbed from the bullshit fakeMovie service js doc with the bullshit function.
      //it retrieves the object about the movie with that specific id, based on the params
    }
  }

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
    //component loads and genres is populated into the state
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    //each render method below has its own state(seen in input.jsx--initially empty),
    //When it is called it uses the state of movieForm--which is generated from componentDidMount()
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
