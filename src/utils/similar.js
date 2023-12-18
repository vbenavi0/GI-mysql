async function similar(movieId){ //asynchronous function to search for similar movies based on argument
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGQ0NmZkMDIyMGYxYTJhZGIwNzk5ZTczMTE0NTlkZSIsInN1YiI6IjY1NzhiOTE0MzVhNjFlMDEwMDBiZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9MrzO5RCi8NOWS6QD10ZHPAESz7OJW7eY1Ah5JqZXsM'
        }
    };
    return fetch('https://api.themoviedb.org/3/movie/'+movieId+'/similar?language=en-US&page=1', options) //fetch similar movies from api
    .then(response => response.json()) //convert to json and return
    .catch(err => console.error(err));
}

module.exports = similar //export similar function