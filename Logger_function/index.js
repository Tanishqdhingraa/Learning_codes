const express = require('express');
const logger = require('./logger');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express Server!');
});

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});
