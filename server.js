//DEPENDENCIES
const express = require('express');
const cors = require('cors');

//JSON files
const about = require('./about.json');
const projects = require('./projects.json');

//APP
const app = express();

//MIDDLEWARE
app.use(cors());

//HOME ROUTE
app.get('/', (req, res) => {
    res.send('Hello World');
});

//ABOUT ROUTE
app.get('/about', (req, res) => {
    res.json(about);
});

//PROJECTS ROUTE
app.get('/projects', (req, res) => {
    res.json(projects);
});


//creating PORT
const PORT = process.env.PORT || 4000;

//LISTENER
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})