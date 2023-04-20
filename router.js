import { name, welcome } from './logger/logger.js';
import { printDate, printMonth, printBatchInfo } from './util/helper.js';
import { trimString, changetoLowerCase, changeToUpperCase } from './validator/formatter.js';
import { chunkMonths, lastNine, unionArr, movieObj } from './demo.js';
import express from 'express'
const app = express()
const port = 3000;

app.get('/test-me', (req, res) => {
  res.send(chunkMonths() + lastNine() + unionArr() + movieObj());
})



app.get('/helper', (req, res) => {

  //   res.send(welcome());
  res.send(printBatchInfo() + printDate() + printMonth());
})

app.get('/logger', (req, res) => {

  res.send(welcome());

})

app.get('/formatter', (req, res) => {
  res.send(trimString() + changeToUpperCase() + changetoLowerCase());

})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})