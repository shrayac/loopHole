const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('loopHole'));

app.listen(port, () => console.log(`loopHole server listening at http://localhost:${port}`));


