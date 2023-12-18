const path = require('path')
const express = require('express')
const hbs = require('hbs')

const similar = require('./utils/similar') //import similar function
const mSearch = require('./utils/movieSearch') //import search function

const app = express()

const publicPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views') //directory for hbs files
const partialPath = path.join(__dirname, '../templates/partials') //directory for partial files

app.set('view engine', 'hbs') //tells express to use our handlebar hbs files
app.set('views', viewPath) //tells express where views folder is
hbs.registerPartials(partialPath) //tells hbs where to find partials

app.use(express.static(publicPath))

app.get('', (req, res)=>{
    res.render('index',{ //render index view template 
        title: 'Movie Search', 
        name: 'Victor'
    })
})

app.get('/movie', (req, res)=>{
    if(!req.query.movie){
        return res.send({error: "You must provide a movie",})
    }
    mSearch(req.query.movie).then(movie =>{
        let id = movie[0].id
        similar(movie[0].id).then(movies =>{
            res.send({
                movie: movie,
                similar: movies.results
            })
        })
    })
})

app.get('*', (req, res)=>{
    res.render('404',{
        message: 'Error 404, page not found',
        title: '404', 
        name: 'Victor'
    })
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000.')
})