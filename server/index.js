require('dotenv').config()
const express = require('express')
const app = express()
const { PORT, CONNECTION_STRING } = process.env
const massive = require('massive')
const ctrl = require('./controller')

app.use(express.json())



// Endpoint
app.get('/api/houses', ctrl.allHouses)
app.post('/api/houses', ctrl.addHouse)




// Listener and MASSIVE connection
massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        console.log('Database hooked UP')
        app.listen(PORT, () => console.log(`hoot on port ${PORT}`))
    })

