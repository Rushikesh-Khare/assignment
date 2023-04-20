// v1/getUser/:id
// v1/getUser

const app = express()
const port = 4000;

app.get('/v1/getUser/:id', (req, res) => {
    const id = req.params.id;
    res.send(`user id is ${id}`);
})

app.get('/v1/getUser', (req, res) => {
    const user = req.params.getUser;
    res.send(`user id is ${user}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })