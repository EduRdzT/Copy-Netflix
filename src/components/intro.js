import React, { Component } from "react";
import TMDB_KEYS from "../helpers/stripe-checkout";
import Imagen from "./imagen";

export class Intro extends Component {
  state = {
    movie: [],
    urlImg: "https://image.tmdb.org/t/p/original",
  };

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/${this.props.getType}/${this.props.movieID}?api_key=${TMDB_KEYS.keyApi}&language=es-ES`;
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          const errorMessage = {
            err: true,
            status: res.status,
            statusText: res.statusText || "Ocurrio un error",
          };
          throw errorMessage;
        }

        let data = await res.json();
        let movie = {
          intro: {
            title: data.title,
            overview: data.overview,
            backdrop_path: data.backdrop_path,
            err: false,
          },
        };

        this.setState({ movie });
        this.props.setMovies((el) => (!el.intro ? { ...el, ...movie } : el));
      } catch (err) {
        this.props.setMovie({ err });
      }
    };

    getData(url);
  }

  render() {
    return (
      <figure className="intro">
        {this.state.movie.intro && (
          <Imagen
            location={
              this.state.movie.intro.backdrop_path &&
              this.state.urlImg + this.state.movie.intro.backdrop_path
            }
            clase={false}
            title={this.state.movie.intro.title}
          />
        )}
      </figure>
    );
  }
}

export default Intro;
