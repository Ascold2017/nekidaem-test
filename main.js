const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/api/proxies', (req, res) => {
    const params = new URLSearchParams()
    params.append('format', 'json')
    Object.keys(req.query).forEach(filter => {
        params.append(filter, req.query[filter])
    })
    const url = new URL('https://proxyfordevelopers.com/api/proxies/')
    url.search = params.toString()
    
    axios.get(url.toString())
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        res.status(400).json(error.response.data)
    })
})

app.listen(3000)
