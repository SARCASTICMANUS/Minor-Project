//importing mongoose package

//req - import statement shortcut
//thenc - then catch shortcut

const mongoose = require('mongoose');


const dbname = 'mytestdb21';
const url =`mongodb+srv://deepak333:deepak0309@cluster0.bvcinmt.mongodb.net/${dbname}?retryWrites=true&w=majority`

//async fuction - returns promise
mongoose.connect(url)
.then((result) => {
    console.log('Database connected');
    
}).catch((err) => {
    console.error(err);
    
});


module.exports = mongoose;

//synchronous - able to perform task one by one
//asynchronous - able to work parllely at same time 