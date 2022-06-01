import * as React from "react";
import * as ReactDOM from "react-dom";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import {useState} from "react";

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

function ListMovies({movies}) {
    return <div>
        <h1>List movies</h1>
        <ul>
            {movies.map(m =>
                <div key={m.title}>
                    <h2>{m.title} ({m.year})</h2>
                    <div>{m.plot}</div>
                </div>
            )}
        </ul>
    </div>
}

function NewMovie() {
    const [title, setTitle] = useState("Initial");
    const [year, setYear] = useState("Initial");
    const [plot,setPlot] = useState("Initial");
    function handleSubmit(e) {
        e.preventDefault();
        movies.push({title, year, plot});
    }
    return <form>
        <h1>New movie</h1>;
        <div>
            <label>Title: <input value={title} onChange={e => setTitle(e.target.value)}/></label>
        </div>
        <div>
            <label>Year: <input value={year} onChange={e => setYear(e.target.value)}/></label>
        </div>
        <div>
            <label>Plot: <textarea value={plot} onChange={e => setPlot(e.target.value)}/></label>
        </div>
        <pre>
            {JSON.stringify({title, year, plot})}
        </pre>
    </form>
}

function Application() {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/movie/new" element={<NewMovie/>} />
                <Route path="/movies" element={<ListMovies movies={movies} />} />
            </Routes>
        </BrowserRouter>

}

ReactDOM.render(
    <Application/>,
    document.getElementById("app")
);

