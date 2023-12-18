const { response } = require('express');
const request  = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmJlbmF2aTAiLCJhIjoiY2xwc3RmcG9mMDZiMjJpb2JxajJrbHFpMyJ9.bnC9psUhyPEjjkB5GuFU6w&limit=1'

//     request({ url, json: true }, (error, {body}) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: body.features[0].center[0],
//                 longitude: body.features[0].center[1],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }

async function similar(movieId){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGQ0NmZkMDIyMGYxYTJhZGIwNzk5ZTczMTE0NTlkZSIsInN1YiI6IjY1NzhiOTE0MzVhNjFlMDEwMDBiZTczMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9MrzO5RCi8NOWS6QD10ZHPAESz7OJW7eY1Ah5JqZXsM'
        }
    };
    return fetch('https://api.themoviedb.org/3/movie/'+movieId+'/similar?language=en-US&page=1', options)
    .then(response => response.json())
    // .then(response => [{movies: response.results}])
    // .then(response => console.log(response))
    .catch(err => console.error(err));
}

// similar(96721)
// similar(96721).then(res=>{
//     console.log(res.results)
// })

module.exports = similar