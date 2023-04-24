import express from 'express';
const app = express();
const port = 3000;
app.get('/assg/:arr', function (req, res) {
    const arr = req.params.arr.split(',');
    arr.sort((a, b) => {
        return a - b;
    });
    let missingNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] > 1) {
            missingNum = Number(arr[i]) + 1;
            break;
        }
    }
    res.json({missingNum});

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
