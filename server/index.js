const express = require('express')
const app = express()

const port = 8088

app.get('/api', (req, res) => {
    res.send("Hello world")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})