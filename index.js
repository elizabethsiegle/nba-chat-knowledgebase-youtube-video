const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON bodies
app.use(express.static('.'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});