//import PropTypes form "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      {/* https://tlsdnjs12.tistory.com/56 
        -> movie.genres가 아직 로딩이 되지 않았을 때 오류가 날 수 있음. 
        그래서 movie.genres가 로딩이 될 때 map을 실행해야 함. 
        안 그러면 undefined에 map을 쓸 수 없다는 오류가 뜸 */}
    </div>
  );
}

// Movie.propTypes = {
//     id:PropTypes.number.isRequired,
//     coverImg: PropTypes.string.isRequred,
//     title: PropTypes.string.isRequred,
//     summary: PropTypes.string.isRequred,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequred,
// };

export default Movie;
