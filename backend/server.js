const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/api/data', (req, res) => {
    const sampleData = {
        message: 'connected'
    };
    res.json(sampleData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
