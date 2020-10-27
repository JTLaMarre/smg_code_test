const express = require('express');
const path = require('path');
const connectDB = require('./config/db')




const app = express();


// connect database
connectDB();


// init middleware
app.use(express.json({extended:false}))


// sends browser that api is working
app.get('/', (req,res)=>res.send(`API running`))


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

 

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(` listening on ${port}`);