async function mSearch(title) { //asynchronous function to search for movie based on argument
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGQ0NmZkMDIyMGYxYTJhZGIwNzk5ZTczMTE0NTlkZSIsInN1YiI6IjY1NzhiOTE0MzVhNjFlMDEwMDBiZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9MrzO5RCi8NOWS6QD10ZHPAESz7OJW7eY1Ah5JqZXsM'
        }
    };
    const url = 'https://api.themoviedb.org/3/search/movie?query='+ title + '&include_adult=false&language=en-US&page=1'; //url to fetch from
    return fetch(url, options)
        .then(res => res.json()) //convert api response to json
        .then(json => [{ //results to return
            movie_title: json.results[0].original_title,
            id: json.results[0].id,
            release_date: json.results[0].release_date,
            overview: json.results[0].overview,
            poster_path: json.results[0].poster_path,
            backdrop_path: json.results[0].backdrop_path,
        }])
        .catch(err => console.error('error:' + err));
}

module.exports = mSearch //export search function