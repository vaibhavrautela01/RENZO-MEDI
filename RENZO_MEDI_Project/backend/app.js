const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const users = [
  { username: '123', password: '123', status: 'valid' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.json({ status: user.status, message: user.status === 'valid' ? 'Login successful' : 'Your subscription has expired. Please renew to continue.' });
  }

  res.status(401).json({ status: 'invalid', message: 'Invalid credentials' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
