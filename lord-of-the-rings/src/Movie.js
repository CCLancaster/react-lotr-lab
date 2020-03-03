import React, {Component} from 'react';
import './App.css';

let movieList = [
{
    movieTitle: 'The Fellowship of the Ring',
    runTime: {
        runHour: 2, 
        runMin: 28
    }
},
{
    movieTitle: 'The Two Towers',
    runTime: {
        runHour: 2,
        runMin: 59
    }
},
{
    movieTitle: 'The Return of the King',
    runTime: {
        runHour: 3,
        runMin: 21
    }
}
]

class movieTitle extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.movieTitle}</h1>
            </div>
        )
    }
}

let runTime = runHour + runMin;

class runTime extends Component {
    render() {
        return (
            <div>
                <p>{this.runTime}</p>
            </div>
        )
    }
}

class Allmovies extends Component {
    render() {
        let movies = [];
        movieList.forEach(movie, index) {
            movies.push(
                <movieTitle movieTitle={movie.movieTitle} />
                <runTime runHour={movie.runHour} runMin={movie.runMin} />
            );
            })
        return(
            <div>
                {movies}
            </div>
        )
        }
    }
}

function App() {
    return(
        <div>
            <Allmovies />
        </div>
    )
}

export default App;