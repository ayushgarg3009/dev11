const express = require('express');
const bodyparser = require('body-parser');
const cors = require("cors")
const app = express();
const apiPort = 3003;
const db = require('./db');
let routes = require('./router');

app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyparser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.use('/api', routes);

app.listen(apiPort, ()=> console.log(`Server running on port ${apiPort}`))





// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const app = express()
// const apiPort = 3003
// // const db = require('./db');
// // let routes = require('./router');


// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())

// //db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// // app.use('/api', routes);


// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
