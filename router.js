import { arr, film } from "./movies/getMovis.js";
import express from 'express';
const app = express();
const port = 3000;
app.get('/movies', function (req, res) {
    res.json({ arr });
})

app.get('/movies/:indexNumber', function (req, res) {
    const id = req.params.indexNumber;
    if (id < arr.length) {
        const val = `movie present at ${id} is ${arr[id]}`;
        res.json({ val });
    } else {
        const val = `error`;
        res.json({ val });
    }
})

app.get('/films/:id', function (req, res) {
    const id = req.params.id;
    const filmId = film[id]['id'];
    const filmName = film[id]['name'];
    if (id < film.length) {
        res.json({filmId, filmName});
    } else {
        error = "this is error"
        res.json({error});
    }
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})