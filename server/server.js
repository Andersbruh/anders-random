import express from "express";
import path from "path";

const app = express();

const MOVIES = [
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

app.get("/api/movies", (req, res) => {
    res.json(MOVIES)
})

app.use(express.static(path.resolve("../dist")));

const server = app.listen(3000, () => {
    console.log("listening on http://localhost:" + server.address().port)
})