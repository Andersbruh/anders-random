import * as React from "react";
import * as ReactDOM from "react-dom";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";

const movies = [
    {
        title: "Cool ass movie",
        plot: "Cool shit happens",
        year: 1498
    },
    {
        title: "Bad ass movie",
        plot: "Bad shit happens",
        year: 1948
    }
];

function FrontPage() {
    return <div>
        <h1>Kristiania Movie Database</h1>
        <ul>
            <li><Link to="/movies">List movies</Link></li>
            <li><Link to="/movie/new">New Movie</Link></li>
        </ul>
    </div>;
}

function ListMovies() {
    return <div>
        <h1>List movies</h1>
        <ul>
            {movies.map(m =>
                <>
                    <h2>{m.title} ({m.year})</h2>
                    <div>{m.plot}</div>
                </>
            )}
        </ul>
    </div>
}

function Application() {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/movie/new" element={<h1>New movie</h1>} />
                <Route path="/movies" element={<ListMovies/>} />
            </Routes>
        </BrowserRouter>

}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);

