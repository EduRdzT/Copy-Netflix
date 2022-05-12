import React, { Component } from "react";
import TMDB_KEYS from "../helpers/TMDb-key";
import Imagen from "./imagen";

export class Intro extends Component {
  state = {
    movie: [],
    urlImg: "https://image.tmdb.org/t/p/original",
  };

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/414906?api_key=${TMDB_KEYS.keyApi}&language=es-ES`;
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
          title: data.title,
          overview: data.overview,
          backdrop_path: data.backdrop_path,
          err: false,
        };

        this.setState({ movie });
        this.props.setMovie({ movie });
      } catch (err) {
        this.props.setMovie({ err });
      }
    };

    getData(url);
  }

  render() {
    return (
      <figure className="intro">
        {this.state.movie && (
          <Imagen
            location={
              this.state.movie.backdrop_path &&
              this.state.urlImg + this.state.movie.backdrop_path
            }
            clase={false}
            title={this.state.movie.title}
          />
        )}
      </figure>
    );
  }
}

export default Intro;
