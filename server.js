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

//ABOUT ROUTE
app.get('/', (req, res) => {
    res.json(about);
});

//Resume ROUTE
app.get('/resume', (req, res) => {
    res.send('Resume');
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