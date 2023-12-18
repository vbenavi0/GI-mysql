const request  = require('request');
// const fetch = require('node-fetch')

// const mSearch = (lon, lat, callback) => {
//     const url =  'http://api.weatherstack.com/current?access_key=a6b280d43a5d2ef21fcb9e608b1d1800&query='+lat+', '+lon+'&units=f'

//     request({url, json:true}, (error, {body})=>{
//         if(error){
//             callback('Unable to connect to weather service!', undefined)
//         }
//         else if(body.error){
//             callback('Unable to find location', undefined)
//         }
//         else{
//             callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+' degrees out.')
//         }
//     })
// }

async function mSearch(title) {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGQ0NmZkMDIyMGYxYTJhZGIwNzk5ZTczMTE0NTlkZSIsInN1YiI6IjY1NzhiOTE0MzVhNjFlMDEwMDBiZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9MrzO5RCi8NOWS6QD10ZHPAESz7OJW7eY1Ah5JqZXsM'
        }
    };
    const url = 'https://api.themoviedb.org/3/search/movie?query='+ title + '&include_adult=false&language=en-US&page=1';
    return fetch(url, options)
        .then(res => res.json())
        .then(json => [{
            movie_title: json.results[0].original_title,
            id: json.results[0].id,
            release_date: json.results[0].release_date,
            overview: json.results[0].overview,
            poster_path: json.results[0].poster_path,
            backdrop_path: json.results[0].backdrop_path,
        }])
        .catch(err => console.error('error:' + err));
}

// mSearch('Rush').then(movie =>{
//     console.log(movie)
//     console.log(movie[0].id)
// })

module.exports = mSearch