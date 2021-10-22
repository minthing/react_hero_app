import React from "react";
import propTypes from 'prop-types';

function Movie({id, title, summary, poster, rating, year}){
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id:propTypes.number.isRequired,
  title:propTypes.string.isRequired,
  summary:propTypes.string.isRequired,
  poster:propTypes.string.isRequired,
  rating:propTypes.number.isRequired,
  year:propTypes.number.isRequired
}

export default Movie;