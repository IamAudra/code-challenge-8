import express from 'express'

import {data} from './data.mjs'

const app = express ()

const PORT = process.env.PORT || 5000


app.get('/', (req,res) => {

    res.send(`Welcome to my resume. Please run command : [npx cc-8] to access my resume. Please visit my /bio endpoint.`)
})

app.get('/cc-8', (req, res) => res.send(data))

// app.get('/hello', (req, res) => {
//     res.send('hello')
//  })


app.listen(PORT, () => {
    console.log(`Hello and thank you for visiting my resume on ${PORT}`)
})