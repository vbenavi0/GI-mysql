console.log('Client side JS file is loaded!')

const movieForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#mess1')
const m2 = document.querySelector('#mess2')
const movieImg = document.querySelector('#movieImg');
const list = document.querySelector('#similar')

movieForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    m1.textContent = ('loading') //display loading text
    m2.textContent = ('') //reset display
    list.innerHTML = ('') //reset movie list

    const movie = search.value

    fetch('http://localhost:3000/movie?movie='+movie).then((response)=>{
    response.json().then((data)=>{
        if(data.error){ //if API error, display proper error
            m1.textContent = (data.error)
        } else{
            m1.textContent = ((data.movie[0].movie_title)) //Display title of searched movie
            console.log(data.movie[0].movie_title)
            movieImg.src = 'https://www.themoviedb.org/t/p/w440_and_h660_face'+(data.movie[0].poster_path) //Display poster of searched movie
            console.log(data.movie[0].poster_path)
            m2.textContent = ('Similar Movies: ')
            data.similar.forEach(movie => {
                let item = document.createElement('div') //create new div and img elements for each similar movie
                let movImg = document.createElement('img')
                console.log(movie.poster_path)
                if(movie.poster_path==null) { //if no movie poster available, display replacement image
                    movImg.src = './img/na.png'
                } else{
                    movImg.src = 'https://www.themoviedb.org/t/p/w440_and_h660_face'+movie.poster_path
                }
                item.append(movImg) //add img to div element
                let movieTxt = document.createElement('p')
                movieTxt.textContent = movie.title
                item.append(movieTxt) //add movie title to div element
                list.append(item) //add div with movie info to similar movie list
            });
        }
    })
})
})