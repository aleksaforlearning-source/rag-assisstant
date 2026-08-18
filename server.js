const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "Alexa",
    project: "RAG assistant",
    day: 3
  });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
