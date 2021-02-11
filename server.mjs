import express from 'express'

import {data} from './data.mjs'

const app = express ()

app.get('/hello', (req, res) => {
   res.send('hello')
})

app.get('/', (req,res) => {

    res.send('Please use npx-res-file to call my resume')
})

app.get('res-file', (req, res) => res.send(data))
    

//app.get()
//app.post()


app.listen('3333', () => {
    console.log('test two')
})
