const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`mf_host running at http://localhost:${port}`);
});
