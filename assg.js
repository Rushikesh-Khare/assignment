// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote


import express from 'express';

const app = express();

const port = 3000;

app.use(express.json());

app.post('/arr', (req, res) => {
    const votingPersonAge = req.body; //taking data using post method
    const votingAge = req.query.votingStatus; //taking query parameter from url
    const result = votingPersonAge.reduce((acc, curr) => {
        if (curr.age && curr.votingStatus === false && curr.age > votingAge) {
            curr.votingStatus = true;
        }
        if (curr.votingStatus === true) {
            acc.push(curr);
        }
        return acc;
    }, [])
    console.log(result);
    if (result.length === 0) {
        return res.send({ error: `there is no person than above than ${votingAge}` });
    }
    return res.send({ data: result, status: true });

})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


