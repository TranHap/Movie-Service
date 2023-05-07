import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../Movie.module.css";
function Movies({id,cover, title, summary, genres}){
    return (
        <div className={styles.movie}>
            <h2 className={styles.movie_title}><Link to ={`/movie/${id}`}>{title}</Link></h2>
            <img src={cover} alt="Cover" className={styles.movie_img} />
            <p>{summary?.length >235 ?  `${summary.slice(0,235)}...` : summary}</p>
            <ul className={styles.movie_genres}>
              {genres?.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );  
}
Movies.propTypes = {
    id:PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movies;