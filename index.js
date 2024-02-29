const express = require('express');
const app = express();

const flavors = [
    { id: 1, flavor: 'choliket' },
    { id: 2, flavor: 'mansanitas' },
    { id: 3, flavor: 'pinetree' },
    { id: 4, flavor: 'charmander' },
    { id: 5, flavor: 'mahogany' },
]

app.get('/', (req, res) => {
    res.send("Hello Jif");
});

app.get('/api/flavors', (req, res) => {
    res.send(flavors);
});

app.get('/api/flavor/:id', (req, res) => {
    const flavor = flavors.find(c => c.id === parseInt(req.params.id));
    if (!flavor) res.status(404).send(`The flavor with the given id is not found`);
    res.send(flavor);
});

// app.get('/api/post/:year/:month', (req, res) => {
//     res.send(req.params);
// });

app.get('/api/post/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/api/post/:firstname/:lastname/:suffix', (req, res) => {
    res.send(req.params);
});


const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));



