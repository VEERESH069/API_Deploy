const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send({ status: 'API is running' });
});
