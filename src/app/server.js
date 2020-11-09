
  
const express = require('express');

const app = express();

app.use(express.static('./dist/bus'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/bus/'}),
);



app.listen(process.env.PORT || 8080);
