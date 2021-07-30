// import react from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h4>{id} {year} {title} {summary} {poster}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;