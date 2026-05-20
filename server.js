const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3004;

app.use('/fireworks', express.static(path.join(__dirname)));

app.get('/fireworks', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Fireworks app is lighting up at http://localhost:${PORT}/fireworks`);
});
