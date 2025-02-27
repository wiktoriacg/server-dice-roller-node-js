const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

app.use(express.static(__dirname + '/public'))

// Endpoint to roll a dice
app.get('/api/roll/:sides', (req, res) => {
  const sides = parseInt(req.params.sides);
  if (isNaN(sides) || sides < 2) {
    return res.status(400).json({ error: 'Invalid number of sides' });
  }
  const result = Math.floor(Math.random() * sides) + 1;
  res.json({ result });
});

// Wake-up endpoint
app.get('/api/wakeup', (req, res) => {
  res.json({ status: 'Server is awake' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});