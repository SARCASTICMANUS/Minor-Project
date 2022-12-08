// importing express
const express = require('express');
const cors = require('cors');

// initializing express
const app = express();

const port = 5000;

const userRouter = require('./routers/userRouter');
const subsRouter = require('./routers/subscriberRouter');

//to allow reat to frontend to acess the backend
app.use(cors({origin:['http://localhost:3000']}))
app.use(express.json());
// middleware
app.use( '/user', userRouter );
app.use( '/subs', subsRouter );

// creating a route or endpoint
app.get( '/', (req, res) => {
    res.send('Request accepted on /');
})

app.get('/home', (req, res) => {
    res.send('request at home');
})

// starting the server
app.listen(port, () => {
    console.log('express API started');
})