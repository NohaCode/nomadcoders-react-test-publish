import { useEffect, useState } from "react";

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // ## inline variables ##
    // const json = await (
    //   await fetch(
    //     "https:/yts.mx/api/v2/list_movies.json?minimun_rating=8.5?sort_by=year"
    //   )
    // ).json();

    const response = await fetch(
      "https:/yts.mx/api/v2/list_movies.json?minimun_rating=8.8?sort_by=year"
    );
    const json = await response.json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
                {/* https://tlsdnjs12.tistory.com/56 
                -> movie.genres가 아직 로딩이 되지 않았을 때 오류가 날 수 있음. 
                그래서 movie.genres가 로딩이 될 때 map을 실행해야 함. 
                안 그러면 undefined에 map을 쓸 수 없다는 오류가 뜸 */}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
