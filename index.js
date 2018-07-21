import express from 'express';
const app = express();
const PORT = 3000;
app.get('/', (requestAnimationFrame, res) => {
    res.send(`Hello Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`);
});